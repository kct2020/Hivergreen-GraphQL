import {
  CrudFilters,
  CrudSorting,
  DataProvider,
  LogicalFilter,
} from "@refinedev/core"
import camelCase from "camelcase"
import capitalize from "capitalize"
import * as gql from "gql-query-builder"
import { GraphQLClient } from "graphql-request"
import pluralize from "pluralize"

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
  create: async () => ({ data: undefined as any }),
  createMany: async () => ({ data: [] }),
  update: async () => ({ data: undefined as any }),
  updateMany: async () => ({ data: [] }),
  deleteOne: async () => ({ data: undefined as any }),
  deleteMany: async () => ({ data: [] }),

  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {}

    const sortBy = generateSort(sorters)
    const filterBy = generateFilter(filters)

    const camelResource = camelCase(resource)

    const operation = meta?.operation ?? camelResource
    const entity = entityName(resource)

    debugger

    const { query, variables } = gql.query({
      operation,
      variables: {
        ...meta?.variables,
        ...sortBy,
        where: filterBy,
        // where: { value: filterBy, type: `${entity}_filter` },
        ...(mode === "server"
          ? { skip: (current - 1) * pageSize, limit: pageSize }
          : {}),
      },
      fields: meta?.fields,
    })

    const response = await client.request(query, variables)

    return {
      data: response[operation],
      total: response[operation].count,
    }
  },

  getMany: async ({ resource, ids, meta }) => {
    const camelResource = camelCase(resource)

    const operation = meta?.operation ?? camelResource
    const entity = entityName(resource)

    const { query, variables } = gql.query({
      operation,
      variables: {
        where: {
          value: { id_in: ids },
          type: `${entity}_filter`,
        },
      },
      fields: meta?.fields,
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

  getApiUrl: () => {
    throw Error("Not implemented on refine-graphql data provider.")
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
})
