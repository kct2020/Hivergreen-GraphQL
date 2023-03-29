import * as actions from "@cap/sdk/actions"
import * as ipfs from "@lib/ipfs"
import {
  BaseRecord,
  CrudFilters,
  CrudSorting,
  DataProvider,
  LogicalFilter,
} from "@refinedev/core"
import { fetchSigner } from "@wagmi/core"
import camelCase from "camelcase"
import capitalize from "capitalize"
import { BigNumber, constants } from "ethers"
import * as gql from "gql-query-builder"
import { GraphQLClient } from "graphql-request"
import pluralize from "pluralize"
import { Address } from "wagmi"

const { AddressZero } = constants

export const entityName = (resource: string) => capitalize(camelCase(resource))

export const generateSort = (sorters: CrudSorting = []) => {
  const [sort] = sorters
  return sort ? { orderBy: sort.field, orderDirection: sort.order } : {}
}

export const generateFilter = (filters: CrudFilters = []) => {
  const queryFilters: { [key: string]: any } = {}

  for (const filter of filters) {
    if (
      filter.operator !== "or" &&
      filter.operator !== "and" &&
      "field" in filter
    ) {
      const { field, operator, value } = filter

      if (operator === "eq") {
        queryFilters[`${field}`] = value
      } else {
        queryFilters[`${field}_${operator}`] = value
      }
    } else {
      queryFilters[filter.operator] = (filter.value as LogicalFilter[]).map(
        ({ field, operator, value }) => ({
          [`${field}_${operator}`]: value,
        }),
      )
    }
  }

  return queryFilters
}

export const dataProvider = (
  client: GraphQLClient,
): Required<DataProvider> => ({
  getApiUrl: () => process.env.NEXT_PUBLIC_SUBGRAPH_URL!,

  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {}

    const sortBy = generateSort(sorters)
    const filterBy = generateFilter(filters)

    const camelResource = camelCase(resource)

    const operation = meta?.operation ?? pluralize(camelResource)

    const { query, variables } = gql.query({
      operation,
      fields: meta?.fields,
      variables: {
        ...meta?.variables,
        ...sortBy,
        where: filterBy,
        // where: { value: filterBy, type: `${entity}_filter` },
        ...(mode === "server"
          ? { skip: (current - 1) * pageSize, limit: pageSize }
          : {}),
      },
    })

    const response = await client.request(query, variables)

    return {
      data: response[operation],
      total: response[operation].count,
    }
  },

  getMany: async ({ resource, ids, meta }) => {
    const camelResource = camelCase(resource)

    const operation = meta?.operation ?? pluralize(camelResource)
    const entity = entityName(resource)

    const { query, variables } = gql.query({
      operation,
      fields: meta?.fields,
      variables: {
        where: {
          value: { id_in: ids },
          type: `${entity}_filter`,
        },
      },
    })

    const response = await client.request(query, variables)

    return {
      data: response[operation],
    }
  },

  getOne: async ({ resource, id, meta }) => {
    const singularResource = pluralize.singular(resource)
    const camelResource = camelCase(singularResource)

    const operation = meta?.operation ?? camelResource

    const { query, variables } = gql.query({
      operation,
      variables: {
        id: { value: id, required: true },
      },
      fields: meta?.fields,
    })

    const response = await client.request(query, variables)

    return {
      data: response[operation],
    }
  },
  custom: async ({ url, method, headers, meta }) => {
    let gqlClient = client

    if (url) {
      gqlClient = new GraphQLClient(url, { headers })
    }

    if (!meta?.operation || !meta?.fields || !meta?.variables) {
      throw Error(
        "GraphQL need to operation, fields and variables values in meta object.",
      )
    }

    if (method === "get") {
      const { query, variables } = gql.query({
        operation: meta.operation,
        fields: meta.fields,
        variables: meta.variables,
      })

      const response = await gqlClient.request(query, variables)

      return {
        data: response[meta.operation],
      }
    } else {
      const { query, variables } = gql.mutation({
        operation: meta.operation,
        fields: meta.fields,
        variables: meta.variables,
      })

      const response = await gqlClient.request(query, variables)

      return {
        data: response[meta.operation],
      }
    }
  },

  create: async ({ resource, variables, meta }) => {
    const signer = await fetchSigner()
    if (!signer) {
      throw Error("No signer found")
    }

    const action = {
      regenerator: mintRegenerator,
      evaluator: mintEvaluator,
      claim: claim,
      accreditation: accredit,
    }[resource]

    if (!action) {
      throw Error("No action found")
    }

    const data = {
      id: await action(variables as any),
    } as any

    return { data }
  },
  createMany: async ({ resource, variables, meta }) => ({ data: [] }),
  update: async ({ resource, id, variables, meta }) => ({ data: null as any }),
  updateMany: async ({ resource, ids, variables, meta }) => ({ data: [] }),
  deleteOne: async ({ resource, id, meta }) => ({ data: null as any }),
  deleteMany: async ({ resource, ids, meta }) => ({ data: [] }),
})

interface MintGroupVariables {
  name: string
  description: string
  fileList: File[]
}

const groupMinter =
  (contractName: "Regenerator" | "Evaluator") =>
  async (variables: MintGroupVariables) => {
    const signer = await fetchSigner()
    if (!signer) {
      throw Error("No signer found")
    }

    const { name, description, fileList } = variables

    const uri = await ipfs.upload([
      ...fileList,
      ipfs.metadataFile({ name, description }),
    ])

    const contract = actions[`get${contractName}s`]({
      address: "0x0", // TODO
      signerOrProvider: signer,
    })

    const [tx, address] = await Promise.all([
      contract.mint(uri),
      signer.getAddress(),
    ])

    const receipt = await tx.wait()

    return receipt.logs
      .map(contract.interface.parseLog)
      .find(
        log =>
          log.name === "Transfer" &&
          log.args.from === AddressZero &&
          log.args.to === address,
      )
      ?.args?.id?.toHexString()
  }

const mintRegenerator = groupMinter("Regenerator")
const mintEvaluator = groupMinter("Evaluator")

interface ClaimVariables {
  regeneratorID: string
  value: number
  validFrom: number
  validTo: number
  fileList: File[]
}

const claim = async ({
  regeneratorID,
  value,
  validFrom,
  validTo,
  fileList,
}: ClaimVariables) => {
  const signer = await fetchSigner()
  if (!signer) {
    throw Error("No signer found")
  }

  const [cid, address] = await Promise.all([
    ipfs.upload(fileList),
    signer.getAddress(),
  ])

  const contract = actions.getCap({
    address: "0x0", // TODO
    signerOrProvider: signer,
  })

  const tx = await contract.claim({
    regeneratorID: BigNumber.from(regeneratorID),
    attestation: {
      signer: address as Address,
      value: BigNumber.from(value),
      validFrom: BigNumber.from(validFrom),
      validTo: BigNumber.from(validTo),
      uri: cid,
    },
  })

  const receipt = await tx.wait()

  return receipt.logs
    .map(contract.interface.parseLog)
    .find(
      log =>
        log.name === "Claim" &&
        log.args.regeneratorID === BigNumber.from(regeneratorID) &&
        log.args.attestation.signer === address,
    )
    ?.args?.claimID?.toHexString()
}

interface AccreditVariables {
  claimID: string
  evaluatorID: string
  value: number
  validFrom: number
  validTo: number
  fileList: File[]
}

const accredit = async ({
  claimID,
  evaluatorID,
  value,
  validFrom,
  validTo,
  fileList,
}: AccreditVariables) => {
  const signer = await fetchSigner()
  if (!signer) {
    throw Error("No signer found")
  }

  const [cid, address] = await Promise.all([
    ipfs.upload(fileList),
    signer.getAddress(),
  ])

  const contract = actions.getCap({
    address: "0x0", // TODO
    signerOrProvider: signer,
  })

  const tx = await contract.accredit({
    claimID: BigNumber.from(claimID),
    evaluatorID: BigNumber.from(evaluatorID),
    attestation: {
      signer: address as Address,
      value: BigNumber.from(value),
      validFrom: BigNumber.from(validFrom),
      validTo: BigNumber.from(validTo),
      uri: cid,
    },
  })

  const receipt = await tx.wait()

  return receipt.logs
    .map(contract.interface.parseLog)
    .find(
      log =>
        log.name === "Accredit" &&
        log.args.claimID === BigNumber.from(claimID) &&
        log.args.attestation.signer === address,
    )
    ?.args?.accreditationID?.toHexString()
}
