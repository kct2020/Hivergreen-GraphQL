import {
  CrudFilters,
  CrudSorting,
  DataProvider,
  LogicalFilter,
} from "@refinedev/core"
import { fetchSigner } from "@wagmi/core"
import camelCase from "camelcase"
import capitalize from "capitalize"
import * as gql from "gql-query-builder"
import { GraphQLClient } from "graphql-request"
import size from "lodash/size"
import pluralize from "pluralize"

export const API_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_SUBGRAPH_URL is not defined")
}

export const gqlClient = new GraphQLClient(API_URL)

export const entityName = (resource: string) =>
  capitalize(camelCase(pluralize.singular(resource)))

export const generateSort = (sorters: CrudSorting = []) => {
  const [sort] = sorters
  return sort ? { orderBy: sort.field, orderDirection: sort.order } : {}
}

export const generateFilter = (filters: CrudFilters = []) => {
  const queryFilters: { [key: string]: unknown } = {}

  for (const filter of filters) {
    if (filter.operator === "or" || filter.operator === "and") {
      queryFilters[filter.operator] = (filter.value as LogicalFilter[]).map(
        ({ field, operator, value }) => ({
          [`${field}_${operator}`]: value,
        }),
      )
    } else if ("field" in filter) {
      const { field, operator, value } = filter

      if (operator === "eq") {
        queryFilters[`${field}`] = value
      } else {
        queryFilters[`${field}_${operator}`] = value
      }
    }
  }

  return queryFilters
}

export const dataProvider: Required<DataProvider> = {
  getApiUrl: () => process.env.NEXT_PUBLIC_SUBGRAPH_URL!,

  create: async ({ variables, meta }) => {
    if (typeof meta?.action !== "function") {
      throw new Error("Invalid meta.action")
    }

    const signer = await fetchSigner()
    if (!signer) {
      throw new Error("Please connect your wallet first.")
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = { id: await meta.action(signer, variables as any) } as any

    return { data }
  },

  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {}

    const sortBy = generateSort(sorters)
    const filterBy = generateFilter(filters)

    const entity = entityName(resource)
    const operation = meta?.operation ?? pluralize(camelCase(resource))
    const where =
      size(filterBy) !== 0
        ? { where: { value: filterBy, type: `${entity}_filter` } }
        : {}

    let fields = meta?.fields
    if (!fields) {
      fields = ["id"]
      console.warn(`dataProvider-${resource} No fields passed to meta.fields`)
      console.info(`dataProvider-${resource} Defaulting to meta.fields: ['id']`)
      throw Error("Invalid meta.fields")
    }

    const { query, variables } = gql.query({
      operation,
      fields,
      variables: {
        ...meta?.variables,
        ...where,
        ...sortBy,
        ...(mode === "server"
          ? { skip: (current - 1) * pageSize, limit: pageSize }
          : {}),
      },
    })

    const response = await gqlClient.request(query, variables)

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

    const response = await gqlClient.request(query, variables)

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
      variables: { id: { value: id, required: true } },
      fields: meta?.fields ?? ["id"],
    })

    const response = await gqlClient.request(query, variables)

    return {
      data: response[operation],
    }
  },

  custom: async ({ url, method, headers, meta }) => {
    const client = url ? new GraphQLClient(url, { headers }) : gqlClient

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

      const response = await client.request(query, variables)

      return {
        data: response[meta.operation],
      }
    } else {
      const { query, variables } = gql.mutation({
        operation: meta.operation,
        fields: meta.fields,
        variables: meta.variables,
      })

      const response = await client.request(query, variables)

      return {
        data: response[meta.operation],
      }
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createMany: async ({ resource, variables, meta }) => ({ data: [] }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  update: async ({ resource, id, variables, meta }) => ({ data: null as any }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateMany: async ({ resource, ids, variables, meta }) => ({ data: [] }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  deleteOne: async ({ resource, id, meta }) => ({ data: null as any }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteMany: async ({ resource, ids, meta }) => ({ data: [] }),
}
