// @ts-nocheck
import { buildASTSchema } from "graphql"

const schemaAST = {
  kind: "Document",
  definitions: [
    {
      kind: "SchemaDefinition",
      operationTypes: [
        {
          kind: "OperationTypeDefinition",
          operation: "query",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Query",
            },
          },
        },
        {
          kind: "OperationTypeDefinition",
          operation: "subscription",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Subscription",
            },
          },
        },
      ],
      directives: [],
    },
    {
      kind: "DirectiveDefinition",
      description: {
        kind: "StringValue",
        value:
          "Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive.",
      },
      name: {
        kind: "Name",
        value: "entity",
      },
      arguments: [],
      repeatable: false,
      locations: [
        {
          kind: "Name",
          value: "OBJECT",
        },
      ],
    },
    {
      kind: "DirectiveDefinition",
      description: {
        kind: "StringValue",
        value: "Defined a Subgraph ID for an object type",
      },
      name: {
        kind: "Name",
        value: "subgraphId",
      },
      arguments: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: "Name",
          value: "OBJECT",
        },
      ],
    },
    {
      kind: "DirectiveDefinition",
      description: {
        kind: "StringValue",
        value:
          "creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API.",
      },
      name: {
        kind: "Name",
        value: "derivedFrom",
      },
      arguments: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "field",
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: "Name",
          value: "FIELD_DEFINITION",
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Account",
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerators",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Regenerator",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodologies",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Methodology",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Claim",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Account_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerators_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Regenerator_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodologies_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Methodology_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claims_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credits_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Account_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerators",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodologies",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BigDecimal",
      },
      directives: [],
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BigInt",
      },
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BlockChangedFilter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "number_gte",
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Block_height",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "hash",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "number",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "number_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "Bytes",
      },
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Certificate",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "A certificate issued from redeeming credits.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuedAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuedTo",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Credit",
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Certificate_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Certificate_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Certificate_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Certificate_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAmount",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "issuedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "issuedTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__updatedAt",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Claim",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Claims to impact credits",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Regenerator",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "transfers",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ClaimTransfer",
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ClaimTransfer",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Represents the transfer of a claim token.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Claim",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ClaimTransfer_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ClaimTransfer_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ClaimTransfer_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "ClaimTransfer_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Claim_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Regenerator_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credits_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "transfers_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ClaimTransfer_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Claim_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Claim_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Claim_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__name",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__description",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "transfers",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Credit",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "An credit of a claim",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Claim",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Regenerator",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodology",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Methodology",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "certificates",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Certificate",
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreditTransfer",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Represents the transfer of a credit token.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bytes",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Credit",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CreditTransfer_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "operator_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "from_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Bytes",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "to_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credit_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreditTransfer_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreditTransfer_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "CreditTransfer_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "operator",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "from",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "to",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credit__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "timestamp",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Credit_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "value_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "validTo_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "signer_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claim_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Regenerator_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "methodology_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Methodology_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "certificates_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Certificate_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Credit_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Credit_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Credit_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "signer__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__value",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__validFrom",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__validTo",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__revokedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claim__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__name",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__description",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "regenerator__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__name",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__description",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "methodology__updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "certificates",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Methodology",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "An evaluation methodology to accredit claims.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Methodology_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credits_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Methodology_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Methodology_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Methodology_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      description: {
        kind: "StringValue",
        value: "Defines the order direction, either ascending or descending",
        block: true,
      },
      name: {
        kind: "Name",
        value: "OrderDirection",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "asc",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "desc",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Query",
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "account",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "accounts",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Account_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Account_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Account",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Regenerator",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerators",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Regenerator",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodology",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Methodology",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodologies",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Methodology",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Claim",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claimTransfer",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ClaimTransfer",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claimTransfers",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ClaimTransfer",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditTransfer",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreditTransfer",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditTransfers",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CreditTransfer_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CreditTransfer_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreditTransfer",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "certificate",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Certificate",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "certificates",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Certificate",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Access to subgraph metadata",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_meta",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "_Meta_",
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Regenerator",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "An impact project, generator, etc.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "id",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Account",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BigInt",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Claim",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Regenerator_filter",
      },
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "id_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "owner_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "uri_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_contains",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_contains_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_starts_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_starts_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_ends_with",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description_not_ends_with_nocase",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lt",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_gte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_lte",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BigInt",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt_not_in",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "BigInt",
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "claims_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "credits_",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit_filter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          description: {
            kind: "StringValue",
            value: "Filter for the block changed event.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_change_block",
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "BlockChangedFilter",
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "and",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Regenerator_filter",
              },
            },
          },
          directives: [],
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "or",
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Regenerator_filter",
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "Regenerator_orderBy",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner__id",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "owner__createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "uri",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "name",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "description",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Subscription",
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "account",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Account",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "accounts",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Account_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Account_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Account",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerator",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Regenerator",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regenerators",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Regenerator_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Regenerator",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodology",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Methodology",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "methodologies",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Methodology_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Methodology",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claim",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Claim",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claims",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Claim_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Claim",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claimTransfer",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ClaimTransfer",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "claimTransfers",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ClaimTransfer_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ClaimTransfer",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credit",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Credit",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credits",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Credit_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Credit",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditTransfer",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CreditTransfer",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditTransfers",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CreditTransfer_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CreditTransfer_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CreditTransfer",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "certificate",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Certificate",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "certificates",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "0",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                },
              },
              defaultValue: {
                kind: "IntValue",
                value: "100",
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderBy",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_orderBy",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderDirection",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "OrderDirection",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "where",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Certificate_filter",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              description: {
                kind: "StringValue",
                value:
                  "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                block: true,
              },
              name: {
                kind: "Name",
                value: "subgraphError",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "_SubgraphErrorPolicy_",
                  },
                },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "deny",
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Certificate",
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "Access to subgraph metadata",
            block: true,
          },
          name: {
            kind: "Name",
            value: "_meta",
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "block",
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Block_height",
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "_Meta_",
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "_Block_",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "The hash of the block",
            block: true,
          },
          name: {
            kind: "Name",
            value: "hash",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Bytes",
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "The block number",
            block: true,
          },
          name: {
            kind: "Name",
            value: "number",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value:
              "Integer representation of the timestamp stored in blocks for the chain",
            block: true,
          },
          name: {
            kind: "Name",
            value: "timestamp",
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "ObjectTypeDefinition",
      description: {
        kind: "StringValue",
        value: "The type for the top-level _meta field",
        block: true,
      },
      name: {
        kind: "Name",
        value: "_Meta_",
      },
      fields: [
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value:
              "Information about a specific subgraph block. The hash of the block\nwill be null if the _meta field has a block constraint that asks for\na block number. It will be filled if the _meta field has no block constraint\nand therefore asks for the latest  block\n",
            block: true,
          },
          name: {
            kind: "Name",
            value: "block",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "_Block_",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value: "The deployment ID",
            block: true,
          },
          name: {
            kind: "Name",
            value: "deployment",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          description: {
            kind: "StringValue",
            value:
              "If `true`, the subgraph encountered indexing errors at some past block",
            block: true,
          },
          name: {
            kind: "Name",
            value: "hasIndexingErrors",
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "_SubgraphErrorPolicy_",
      },
      values: [
        {
          kind: "EnumValueDefinition",
          description: {
            kind: "StringValue",
            value:
              "Data will be returned even if the subgraph has indexing errors",
            block: true,
          },
          name: {
            kind: "Name",
            value: "allow",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          description: {
            kind: "StringValue",
            value:
              "If the subgraph has indexing errors, data will be omitted. The default.",
            block: true,
          },
          name: {
            kind: "Name",
            value: "deny",
          },
          directives: [],
        },
      ],
      directives: [],
    },
  ],
}

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true,
})
