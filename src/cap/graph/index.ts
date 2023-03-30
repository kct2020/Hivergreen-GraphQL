// @ts-nocheck
import {
  GraphQLResolveInfo,
  SelectionSetNode,
  FieldNode,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql"
import type { GetMeshOptions } from "@graphql-mesh/runtime"
import type { YamlConfig } from "@graphql-mesh/types"
import { PubSub } from "@graphql-mesh/utils"
import { DefaultLogger } from "@graphql-mesh/utils"
import MeshCache from "@graphql-mesh/cache-localforage"
import { fetch as fetchFn } from "@whatwg-node/fetch"

import { MeshResolvedSource } from "@graphql-mesh/runtime"
import { MeshTransform, MeshPlugin } from "@graphql-mesh/types"
import GraphqlHandler from "@graphql-mesh/graphql"
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination"
import BareMerger from "@graphql-mesh/merger-bare"
import { createMeshHTTPHandler, MeshHTTPHandler } from "@graphql-mesh/http"
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from "@graphql-mesh/runtime"
import { MeshStore, FsStoreStorageAdapter } from "@graphql-mesh/store"
import { path as pathModule } from "@graphql-mesh/cross-helpers"
import { ImportFn } from "@graphql-mesh/types"
import type { CyrusofedenCapTypes } from "./sources/cyrusofeden/cap/types"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: any
  Bytes: any
}

export type Account = {
  id: Scalars["String"]
  createdAt: Scalars["BigInt"]
  regenerators: Array<Regenerator>
  methodologies: Array<Methodology>
  claims: Array<Claim>
  credits: Array<Credit>
}

export type AccountregeneratorsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Regenerator_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Regenerator_filter>
}

export type AccountmethodologiesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Methodology_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Methodology_filter>
}

export type AccountclaimsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Claim_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Claim_filter>
}

export type AccountcreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
}

export type Account_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["BigInt"]>
  createdAt_not?: InputMaybe<Scalars["BigInt"]>
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  regenerators_?: InputMaybe<Regenerator_filter>
  methodologies_?: InputMaybe<Methodology_filter>
  claims_?: InputMaybe<Claim_filter>
  credits_?: InputMaybe<Credit_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>
}

export type Account_orderBy =
  | "id"
  | "createdAt"
  | "regenerators"
  | "methodologies"
  | "claims"
  | "credits"

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]
}

export type Block_height = {
  hash?: InputMaybe<Scalars["Bytes"]>
  number?: InputMaybe<Scalars["Int"]>
  number_gte?: InputMaybe<Scalars["Int"]>
}

export type Certificate = {
  /** A certificate issued from redeeming credits. */
  id: Scalars["String"]
  issuedAmount: Scalars["BigInt"]
  issuedAt: Scalars["BigInt"]
  issuedTo: Scalars["Bytes"]
  credit: Credit
}

export type Certificate_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  issuedAmount?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_not?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_gt?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_lt?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_gte?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_lte?: InputMaybe<Scalars["BigInt"]>
  issuedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>
  issuedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  issuedAt?: InputMaybe<Scalars["BigInt"]>
  issuedAt_not?: InputMaybe<Scalars["BigInt"]>
  issuedAt_gt?: InputMaybe<Scalars["BigInt"]>
  issuedAt_lt?: InputMaybe<Scalars["BigInt"]>
  issuedAt_gte?: InputMaybe<Scalars["BigInt"]>
  issuedAt_lte?: InputMaybe<Scalars["BigInt"]>
  issuedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  issuedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  issuedTo?: InputMaybe<Scalars["Bytes"]>
  issuedTo_not?: InputMaybe<Scalars["Bytes"]>
  issuedTo_gt?: InputMaybe<Scalars["Bytes"]>
  issuedTo_lt?: InputMaybe<Scalars["Bytes"]>
  issuedTo_gte?: InputMaybe<Scalars["Bytes"]>
  issuedTo_lte?: InputMaybe<Scalars["Bytes"]>
  issuedTo_in?: InputMaybe<Array<Scalars["Bytes"]>>
  issuedTo_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  issuedTo_contains?: InputMaybe<Scalars["Bytes"]>
  issuedTo_not_contains?: InputMaybe<Scalars["Bytes"]>
  credit?: InputMaybe<Scalars["String"]>
  credit_not?: InputMaybe<Scalars["String"]>
  credit_gt?: InputMaybe<Scalars["String"]>
  credit_lt?: InputMaybe<Scalars["String"]>
  credit_gte?: InputMaybe<Scalars["String"]>
  credit_lte?: InputMaybe<Scalars["String"]>
  credit_in?: InputMaybe<Array<Scalars["String"]>>
  credit_not_in?: InputMaybe<Array<Scalars["String"]>>
  credit_contains?: InputMaybe<Scalars["String"]>
  credit_contains_nocase?: InputMaybe<Scalars["String"]>
  credit_not_contains?: InputMaybe<Scalars["String"]>
  credit_not_contains_nocase?: InputMaybe<Scalars["String"]>
  credit_starts_with?: InputMaybe<Scalars["String"]>
  credit_starts_with_nocase?: InputMaybe<Scalars["String"]>
  credit_not_starts_with?: InputMaybe<Scalars["String"]>
  credit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  credit_ends_with?: InputMaybe<Scalars["String"]>
  credit_ends_with_nocase?: InputMaybe<Scalars["String"]>
  credit_not_ends_with?: InputMaybe<Scalars["String"]>
  credit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  credit_?: InputMaybe<Credit_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Certificate_filter>>>
  or?: InputMaybe<Array<InputMaybe<Certificate_filter>>>
}

export type Certificate_orderBy =
  | "id"
  | "issuedAmount"
  | "issuedAt"
  | "issuedTo"
  | "credit"
  | "credit__id"
  | "credit__value"
  | "credit__validFrom"
  | "credit__validTo"
  | "credit__uri"
  | "credit__createdAt"
  | "credit__revokedAt"
  | "credit__updatedAt"

export type Claim = {
  /** Claims to impact credits */
  id: Scalars["String"]
  value: Scalars["BigInt"]
  validFrom: Scalars["BigInt"]
  validTo: Scalars["BigInt"]
  uri: Scalars["String"]
  signer: Account
  createdAt: Scalars["BigInt"]
  revokedAt?: Maybe<Scalars["BigInt"]>
  updatedAt: Scalars["BigInt"]
  regenerator: Regenerator
  credits: Array<Credit>
  transfers: Array<ClaimTransfer>
}

export type ClaimcreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
}

export type ClaimtransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<ClaimTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ClaimTransfer_filter>
}

export type ClaimTransfer = {
  /** Represents the transfer of a claim token. */
  id: Scalars["String"]
  operator: Scalars["Bytes"]
  from: Scalars["Bytes"]
  to: Scalars["Bytes"]
  claim: Claim
  value: Scalars["BigInt"]
  timestamp: Scalars["BigInt"]
}

export type ClaimTransfer_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  operator?: InputMaybe<Scalars["Bytes"]>
  operator_not?: InputMaybe<Scalars["Bytes"]>
  operator_gt?: InputMaybe<Scalars["Bytes"]>
  operator_lt?: InputMaybe<Scalars["Bytes"]>
  operator_gte?: InputMaybe<Scalars["Bytes"]>
  operator_lte?: InputMaybe<Scalars["Bytes"]>
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  operator_contains?: InputMaybe<Scalars["Bytes"]>
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>
  from?: InputMaybe<Scalars["Bytes"]>
  from_not?: InputMaybe<Scalars["Bytes"]>
  from_gt?: InputMaybe<Scalars["Bytes"]>
  from_lt?: InputMaybe<Scalars["Bytes"]>
  from_gte?: InputMaybe<Scalars["Bytes"]>
  from_lte?: InputMaybe<Scalars["Bytes"]>
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  from_contains?: InputMaybe<Scalars["Bytes"]>
  from_not_contains?: InputMaybe<Scalars["Bytes"]>
  to?: InputMaybe<Scalars["Bytes"]>
  to_not?: InputMaybe<Scalars["Bytes"]>
  to_gt?: InputMaybe<Scalars["Bytes"]>
  to_lt?: InputMaybe<Scalars["Bytes"]>
  to_gte?: InputMaybe<Scalars["Bytes"]>
  to_lte?: InputMaybe<Scalars["Bytes"]>
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  to_contains?: InputMaybe<Scalars["Bytes"]>
  to_not_contains?: InputMaybe<Scalars["Bytes"]>
  claim?: InputMaybe<Scalars["String"]>
  claim_not?: InputMaybe<Scalars["String"]>
  claim_gt?: InputMaybe<Scalars["String"]>
  claim_lt?: InputMaybe<Scalars["String"]>
  claim_gte?: InputMaybe<Scalars["String"]>
  claim_lte?: InputMaybe<Scalars["String"]>
  claim_in?: InputMaybe<Array<Scalars["String"]>>
  claim_not_in?: InputMaybe<Array<Scalars["String"]>>
  claim_contains?: InputMaybe<Scalars["String"]>
  claim_contains_nocase?: InputMaybe<Scalars["String"]>
  claim_not_contains?: InputMaybe<Scalars["String"]>
  claim_not_contains_nocase?: InputMaybe<Scalars["String"]>
  claim_starts_with?: InputMaybe<Scalars["String"]>
  claim_starts_with_nocase?: InputMaybe<Scalars["String"]>
  claim_not_starts_with?: InputMaybe<Scalars["String"]>
  claim_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  claim_ends_with?: InputMaybe<Scalars["String"]>
  claim_ends_with_nocase?: InputMaybe<Scalars["String"]>
  claim_not_ends_with?: InputMaybe<Scalars["String"]>
  claim_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  claim_?: InputMaybe<Claim_filter>
  value?: InputMaybe<Scalars["BigInt"]>
  value_not?: InputMaybe<Scalars["BigInt"]>
  value_gt?: InputMaybe<Scalars["BigInt"]>
  value_lt?: InputMaybe<Scalars["BigInt"]>
  value_gte?: InputMaybe<Scalars["BigInt"]>
  value_lte?: InputMaybe<Scalars["BigInt"]>
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  timestamp?: InputMaybe<Scalars["BigInt"]>
  timestamp_not?: InputMaybe<Scalars["BigInt"]>
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ClaimTransfer_filter>>>
  or?: InputMaybe<Array<InputMaybe<ClaimTransfer_filter>>>
}

export type ClaimTransfer_orderBy =
  | "id"
  | "operator"
  | "from"
  | "to"
  | "claim"
  | "claim__id"
  | "claim__value"
  | "claim__validFrom"
  | "claim__validTo"
  | "claim__uri"
  | "claim__createdAt"
  | "claim__revokedAt"
  | "claim__updatedAt"
  | "value"
  | "timestamp"

export type Claim_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  value?: InputMaybe<Scalars["BigInt"]>
  value_not?: InputMaybe<Scalars["BigInt"]>
  value_gt?: InputMaybe<Scalars["BigInt"]>
  value_lt?: InputMaybe<Scalars["BigInt"]>
  value_gte?: InputMaybe<Scalars["BigInt"]>
  value_lte?: InputMaybe<Scalars["BigInt"]>
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validFrom?: InputMaybe<Scalars["BigInt"]>
  validFrom_not?: InputMaybe<Scalars["BigInt"]>
  validFrom_gt?: InputMaybe<Scalars["BigInt"]>
  validFrom_lt?: InputMaybe<Scalars["BigInt"]>
  validFrom_gte?: InputMaybe<Scalars["BigInt"]>
  validFrom_lte?: InputMaybe<Scalars["BigInt"]>
  validFrom_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validFrom_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validTo?: InputMaybe<Scalars["BigInt"]>
  validTo_not?: InputMaybe<Scalars["BigInt"]>
  validTo_gt?: InputMaybe<Scalars["BigInt"]>
  validTo_lt?: InputMaybe<Scalars["BigInt"]>
  validTo_gte?: InputMaybe<Scalars["BigInt"]>
  validTo_lte?: InputMaybe<Scalars["BigInt"]>
  validTo_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validTo_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  uri?: InputMaybe<Scalars["String"]>
  uri_not?: InputMaybe<Scalars["String"]>
  uri_gt?: InputMaybe<Scalars["String"]>
  uri_lt?: InputMaybe<Scalars["String"]>
  uri_gte?: InputMaybe<Scalars["String"]>
  uri_lte?: InputMaybe<Scalars["String"]>
  uri_in?: InputMaybe<Array<Scalars["String"]>>
  uri_not_in?: InputMaybe<Array<Scalars["String"]>>
  uri_contains?: InputMaybe<Scalars["String"]>
  uri_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_not_contains?: InputMaybe<Scalars["String"]>
  uri_not_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_starts_with?: InputMaybe<Scalars["String"]>
  uri_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_starts_with?: InputMaybe<Scalars["String"]>
  uri_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_ends_with?: InputMaybe<Scalars["String"]>
  uri_ends_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_ends_with?: InputMaybe<Scalars["String"]>
  uri_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer?: InputMaybe<Scalars["String"]>
  signer_not?: InputMaybe<Scalars["String"]>
  signer_gt?: InputMaybe<Scalars["String"]>
  signer_lt?: InputMaybe<Scalars["String"]>
  signer_gte?: InputMaybe<Scalars["String"]>
  signer_lte?: InputMaybe<Scalars["String"]>
  signer_in?: InputMaybe<Array<Scalars["String"]>>
  signer_not_in?: InputMaybe<Array<Scalars["String"]>>
  signer_contains?: InputMaybe<Scalars["String"]>
  signer_contains_nocase?: InputMaybe<Scalars["String"]>
  signer_not_contains?: InputMaybe<Scalars["String"]>
  signer_not_contains_nocase?: InputMaybe<Scalars["String"]>
  signer_starts_with?: InputMaybe<Scalars["String"]>
  signer_starts_with_nocase?: InputMaybe<Scalars["String"]>
  signer_not_starts_with?: InputMaybe<Scalars["String"]>
  signer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  signer_ends_with?: InputMaybe<Scalars["String"]>
  signer_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer_not_ends_with?: InputMaybe<Scalars["String"]>
  signer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer_?: InputMaybe<Account_filter>
  createdAt?: InputMaybe<Scalars["BigInt"]>
  createdAt_not?: InputMaybe<Scalars["BigInt"]>
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  revokedAt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_not?: InputMaybe<Scalars["BigInt"]>
  revokedAt_gt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_lt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_gte?: InputMaybe<Scalars["BigInt"]>
  revokedAt_lte?: InputMaybe<Scalars["BigInt"]>
  revokedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  revokedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_not?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  regenerator?: InputMaybe<Scalars["String"]>
  regenerator_not?: InputMaybe<Scalars["String"]>
  regenerator_gt?: InputMaybe<Scalars["String"]>
  regenerator_lt?: InputMaybe<Scalars["String"]>
  regenerator_gte?: InputMaybe<Scalars["String"]>
  regenerator_lte?: InputMaybe<Scalars["String"]>
  regenerator_in?: InputMaybe<Array<Scalars["String"]>>
  regenerator_not_in?: InputMaybe<Array<Scalars["String"]>>
  regenerator_contains?: InputMaybe<Scalars["String"]>
  regenerator_contains_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_contains?: InputMaybe<Scalars["String"]>
  regenerator_not_contains_nocase?: InputMaybe<Scalars["String"]>
  regenerator_starts_with?: InputMaybe<Scalars["String"]>
  regenerator_starts_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_starts_with?: InputMaybe<Scalars["String"]>
  regenerator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_ends_with?: InputMaybe<Scalars["String"]>
  regenerator_ends_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_ends_with?: InputMaybe<Scalars["String"]>
  regenerator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_?: InputMaybe<Regenerator_filter>
  credits_?: InputMaybe<Credit_filter>
  transfers_?: InputMaybe<ClaimTransfer_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Claim_filter>>>
  or?: InputMaybe<Array<InputMaybe<Claim_filter>>>
}

export type Claim_orderBy =
  | "id"
  | "value"
  | "validFrom"
  | "validTo"
  | "uri"
  | "signer"
  | "signer__id"
  | "signer__createdAt"
  | "createdAt"
  | "revokedAt"
  | "updatedAt"
  | "regenerator"
  | "regenerator__id"
  | "regenerator__uri"
  | "regenerator__name"
  | "regenerator__description"
  | "regenerator__createdAt"
  | "regenerator__updatedAt"
  | "credits"
  | "transfers"

export type Credit = {
  /** An credit of a claim */
  id: Scalars["String"]
  value: Scalars["BigInt"]
  validFrom: Scalars["BigInt"]
  validTo: Scalars["BigInt"]
  uri: Scalars["String"]
  signer: Account
  createdAt: Scalars["BigInt"]
  revokedAt?: Maybe<Scalars["BigInt"]>
  updatedAt: Scalars["BigInt"]
  claim: Claim
  regenerator: Regenerator
  methodology: Methodology
  certificates: Array<Certificate>
}

export type CreditcertificatesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Certificate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Certificate_filter>
}

export type CreditTransfer = {
  /** Represents the transfer of a credit token. */
  id: Scalars["String"]
  operator: Scalars["Bytes"]
  from: Scalars["Bytes"]
  to: Scalars["Bytes"]
  credit: Credit
  value: Scalars["BigInt"]
  timestamp: Scalars["BigInt"]
}

export type CreditTransfer_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  operator?: InputMaybe<Scalars["Bytes"]>
  operator_not?: InputMaybe<Scalars["Bytes"]>
  operator_gt?: InputMaybe<Scalars["Bytes"]>
  operator_lt?: InputMaybe<Scalars["Bytes"]>
  operator_gte?: InputMaybe<Scalars["Bytes"]>
  operator_lte?: InputMaybe<Scalars["Bytes"]>
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  operator_contains?: InputMaybe<Scalars["Bytes"]>
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>
  from?: InputMaybe<Scalars["Bytes"]>
  from_not?: InputMaybe<Scalars["Bytes"]>
  from_gt?: InputMaybe<Scalars["Bytes"]>
  from_lt?: InputMaybe<Scalars["Bytes"]>
  from_gte?: InputMaybe<Scalars["Bytes"]>
  from_lte?: InputMaybe<Scalars["Bytes"]>
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  from_contains?: InputMaybe<Scalars["Bytes"]>
  from_not_contains?: InputMaybe<Scalars["Bytes"]>
  to?: InputMaybe<Scalars["Bytes"]>
  to_not?: InputMaybe<Scalars["Bytes"]>
  to_gt?: InputMaybe<Scalars["Bytes"]>
  to_lt?: InputMaybe<Scalars["Bytes"]>
  to_gte?: InputMaybe<Scalars["Bytes"]>
  to_lte?: InputMaybe<Scalars["Bytes"]>
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
  to_contains?: InputMaybe<Scalars["Bytes"]>
  to_not_contains?: InputMaybe<Scalars["Bytes"]>
  credit?: InputMaybe<Scalars["String"]>
  credit_not?: InputMaybe<Scalars["String"]>
  credit_gt?: InputMaybe<Scalars["String"]>
  credit_lt?: InputMaybe<Scalars["String"]>
  credit_gte?: InputMaybe<Scalars["String"]>
  credit_lte?: InputMaybe<Scalars["String"]>
  credit_in?: InputMaybe<Array<Scalars["String"]>>
  credit_not_in?: InputMaybe<Array<Scalars["String"]>>
  credit_contains?: InputMaybe<Scalars["String"]>
  credit_contains_nocase?: InputMaybe<Scalars["String"]>
  credit_not_contains?: InputMaybe<Scalars["String"]>
  credit_not_contains_nocase?: InputMaybe<Scalars["String"]>
  credit_starts_with?: InputMaybe<Scalars["String"]>
  credit_starts_with_nocase?: InputMaybe<Scalars["String"]>
  credit_not_starts_with?: InputMaybe<Scalars["String"]>
  credit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  credit_ends_with?: InputMaybe<Scalars["String"]>
  credit_ends_with_nocase?: InputMaybe<Scalars["String"]>
  credit_not_ends_with?: InputMaybe<Scalars["String"]>
  credit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  credit_?: InputMaybe<Credit_filter>
  value?: InputMaybe<Scalars["BigInt"]>
  value_not?: InputMaybe<Scalars["BigInt"]>
  value_gt?: InputMaybe<Scalars["BigInt"]>
  value_lt?: InputMaybe<Scalars["BigInt"]>
  value_gte?: InputMaybe<Scalars["BigInt"]>
  value_lte?: InputMaybe<Scalars["BigInt"]>
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  timestamp?: InputMaybe<Scalars["BigInt"]>
  timestamp_not?: InputMaybe<Scalars["BigInt"]>
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<CreditTransfer_filter>>>
  or?: InputMaybe<Array<InputMaybe<CreditTransfer_filter>>>
}

export type CreditTransfer_orderBy =
  | "id"
  | "operator"
  | "from"
  | "to"
  | "credit"
  | "credit__id"
  | "credit__value"
  | "credit__validFrom"
  | "credit__validTo"
  | "credit__uri"
  | "credit__createdAt"
  | "credit__revokedAt"
  | "credit__updatedAt"
  | "value"
  | "timestamp"

export type Credit_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  value?: InputMaybe<Scalars["BigInt"]>
  value_not?: InputMaybe<Scalars["BigInt"]>
  value_gt?: InputMaybe<Scalars["BigInt"]>
  value_lt?: InputMaybe<Scalars["BigInt"]>
  value_gte?: InputMaybe<Scalars["BigInt"]>
  value_lte?: InputMaybe<Scalars["BigInt"]>
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validFrom?: InputMaybe<Scalars["BigInt"]>
  validFrom_not?: InputMaybe<Scalars["BigInt"]>
  validFrom_gt?: InputMaybe<Scalars["BigInt"]>
  validFrom_lt?: InputMaybe<Scalars["BigInt"]>
  validFrom_gte?: InputMaybe<Scalars["BigInt"]>
  validFrom_lte?: InputMaybe<Scalars["BigInt"]>
  validFrom_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validFrom_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validTo?: InputMaybe<Scalars["BigInt"]>
  validTo_not?: InputMaybe<Scalars["BigInt"]>
  validTo_gt?: InputMaybe<Scalars["BigInt"]>
  validTo_lt?: InputMaybe<Scalars["BigInt"]>
  validTo_gte?: InputMaybe<Scalars["BigInt"]>
  validTo_lte?: InputMaybe<Scalars["BigInt"]>
  validTo_in?: InputMaybe<Array<Scalars["BigInt"]>>
  validTo_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  uri?: InputMaybe<Scalars["String"]>
  uri_not?: InputMaybe<Scalars["String"]>
  uri_gt?: InputMaybe<Scalars["String"]>
  uri_lt?: InputMaybe<Scalars["String"]>
  uri_gte?: InputMaybe<Scalars["String"]>
  uri_lte?: InputMaybe<Scalars["String"]>
  uri_in?: InputMaybe<Array<Scalars["String"]>>
  uri_not_in?: InputMaybe<Array<Scalars["String"]>>
  uri_contains?: InputMaybe<Scalars["String"]>
  uri_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_not_contains?: InputMaybe<Scalars["String"]>
  uri_not_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_starts_with?: InputMaybe<Scalars["String"]>
  uri_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_starts_with?: InputMaybe<Scalars["String"]>
  uri_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_ends_with?: InputMaybe<Scalars["String"]>
  uri_ends_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_ends_with?: InputMaybe<Scalars["String"]>
  uri_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer?: InputMaybe<Scalars["String"]>
  signer_not?: InputMaybe<Scalars["String"]>
  signer_gt?: InputMaybe<Scalars["String"]>
  signer_lt?: InputMaybe<Scalars["String"]>
  signer_gte?: InputMaybe<Scalars["String"]>
  signer_lte?: InputMaybe<Scalars["String"]>
  signer_in?: InputMaybe<Array<Scalars["String"]>>
  signer_not_in?: InputMaybe<Array<Scalars["String"]>>
  signer_contains?: InputMaybe<Scalars["String"]>
  signer_contains_nocase?: InputMaybe<Scalars["String"]>
  signer_not_contains?: InputMaybe<Scalars["String"]>
  signer_not_contains_nocase?: InputMaybe<Scalars["String"]>
  signer_starts_with?: InputMaybe<Scalars["String"]>
  signer_starts_with_nocase?: InputMaybe<Scalars["String"]>
  signer_not_starts_with?: InputMaybe<Scalars["String"]>
  signer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  signer_ends_with?: InputMaybe<Scalars["String"]>
  signer_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer_not_ends_with?: InputMaybe<Scalars["String"]>
  signer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  signer_?: InputMaybe<Account_filter>
  createdAt?: InputMaybe<Scalars["BigInt"]>
  createdAt_not?: InputMaybe<Scalars["BigInt"]>
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  revokedAt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_not?: InputMaybe<Scalars["BigInt"]>
  revokedAt_gt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_lt?: InputMaybe<Scalars["BigInt"]>
  revokedAt_gte?: InputMaybe<Scalars["BigInt"]>
  revokedAt_lte?: InputMaybe<Scalars["BigInt"]>
  revokedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  revokedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_not?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  claim?: InputMaybe<Scalars["String"]>
  claim_not?: InputMaybe<Scalars["String"]>
  claim_gt?: InputMaybe<Scalars["String"]>
  claim_lt?: InputMaybe<Scalars["String"]>
  claim_gte?: InputMaybe<Scalars["String"]>
  claim_lte?: InputMaybe<Scalars["String"]>
  claim_in?: InputMaybe<Array<Scalars["String"]>>
  claim_not_in?: InputMaybe<Array<Scalars["String"]>>
  claim_contains?: InputMaybe<Scalars["String"]>
  claim_contains_nocase?: InputMaybe<Scalars["String"]>
  claim_not_contains?: InputMaybe<Scalars["String"]>
  claim_not_contains_nocase?: InputMaybe<Scalars["String"]>
  claim_starts_with?: InputMaybe<Scalars["String"]>
  claim_starts_with_nocase?: InputMaybe<Scalars["String"]>
  claim_not_starts_with?: InputMaybe<Scalars["String"]>
  claim_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  claim_ends_with?: InputMaybe<Scalars["String"]>
  claim_ends_with_nocase?: InputMaybe<Scalars["String"]>
  claim_not_ends_with?: InputMaybe<Scalars["String"]>
  claim_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  claim_?: InputMaybe<Claim_filter>
  regenerator?: InputMaybe<Scalars["String"]>
  regenerator_not?: InputMaybe<Scalars["String"]>
  regenerator_gt?: InputMaybe<Scalars["String"]>
  regenerator_lt?: InputMaybe<Scalars["String"]>
  regenerator_gte?: InputMaybe<Scalars["String"]>
  regenerator_lte?: InputMaybe<Scalars["String"]>
  regenerator_in?: InputMaybe<Array<Scalars["String"]>>
  regenerator_not_in?: InputMaybe<Array<Scalars["String"]>>
  regenerator_contains?: InputMaybe<Scalars["String"]>
  regenerator_contains_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_contains?: InputMaybe<Scalars["String"]>
  regenerator_not_contains_nocase?: InputMaybe<Scalars["String"]>
  regenerator_starts_with?: InputMaybe<Scalars["String"]>
  regenerator_starts_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_starts_with?: InputMaybe<Scalars["String"]>
  regenerator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_ends_with?: InputMaybe<Scalars["String"]>
  regenerator_ends_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_not_ends_with?: InputMaybe<Scalars["String"]>
  regenerator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  regenerator_?: InputMaybe<Regenerator_filter>
  methodology?: InputMaybe<Scalars["String"]>
  methodology_not?: InputMaybe<Scalars["String"]>
  methodology_gt?: InputMaybe<Scalars["String"]>
  methodology_lt?: InputMaybe<Scalars["String"]>
  methodology_gte?: InputMaybe<Scalars["String"]>
  methodology_lte?: InputMaybe<Scalars["String"]>
  methodology_in?: InputMaybe<Array<Scalars["String"]>>
  methodology_not_in?: InputMaybe<Array<Scalars["String"]>>
  methodology_contains?: InputMaybe<Scalars["String"]>
  methodology_contains_nocase?: InputMaybe<Scalars["String"]>
  methodology_not_contains?: InputMaybe<Scalars["String"]>
  methodology_not_contains_nocase?: InputMaybe<Scalars["String"]>
  methodology_starts_with?: InputMaybe<Scalars["String"]>
  methodology_starts_with_nocase?: InputMaybe<Scalars["String"]>
  methodology_not_starts_with?: InputMaybe<Scalars["String"]>
  methodology_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  methodology_ends_with?: InputMaybe<Scalars["String"]>
  methodology_ends_with_nocase?: InputMaybe<Scalars["String"]>
  methodology_not_ends_with?: InputMaybe<Scalars["String"]>
  methodology_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  methodology_?: InputMaybe<Methodology_filter>
  certificates_?: InputMaybe<Certificate_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Credit_filter>>>
  or?: InputMaybe<Array<InputMaybe<Credit_filter>>>
}

export type Credit_orderBy =
  | "id"
  | "value"
  | "validFrom"
  | "validTo"
  | "uri"
  | "signer"
  | "signer__id"
  | "signer__createdAt"
  | "createdAt"
  | "revokedAt"
  | "updatedAt"
  | "claim"
  | "claim__id"
  | "claim__value"
  | "claim__validFrom"
  | "claim__validTo"
  | "claim__uri"
  | "claim__createdAt"
  | "claim__revokedAt"
  | "claim__updatedAt"
  | "regenerator"
  | "regenerator__id"
  | "regenerator__uri"
  | "regenerator__name"
  | "regenerator__description"
  | "regenerator__createdAt"
  | "regenerator__updatedAt"
  | "methodology"
  | "methodology__id"
  | "methodology__uri"
  | "methodology__name"
  | "methodology__description"
  | "methodology__createdAt"
  | "methodology__updatedAt"
  | "certificates"

export type Methodology = {
  /** An evaluation methodology to accredit claims. */
  id: Scalars["String"]
  owner: Account
  uri?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  createdAt: Scalars["BigInt"]
  updatedAt: Scalars["BigInt"]
  credits: Array<Credit>
}

export type MethodologycreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
}

export type Methodology_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner?: InputMaybe<Scalars["String"]>
  owner_not?: InputMaybe<Scalars["String"]>
  owner_gt?: InputMaybe<Scalars["String"]>
  owner_lt?: InputMaybe<Scalars["String"]>
  owner_gte?: InputMaybe<Scalars["String"]>
  owner_lte?: InputMaybe<Scalars["String"]>
  owner_in?: InputMaybe<Array<Scalars["String"]>>
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>
  owner_contains?: InputMaybe<Scalars["String"]>
  owner_contains_nocase?: InputMaybe<Scalars["String"]>
  owner_not_contains?: InputMaybe<Scalars["String"]>
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>
  owner_starts_with?: InputMaybe<Scalars["String"]>
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>
  owner_not_starts_with?: InputMaybe<Scalars["String"]>
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  owner_ends_with?: InputMaybe<Scalars["String"]>
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner_not_ends_with?: InputMaybe<Scalars["String"]>
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner_?: InputMaybe<Account_filter>
  uri?: InputMaybe<Scalars["String"]>
  uri_not?: InputMaybe<Scalars["String"]>
  uri_gt?: InputMaybe<Scalars["String"]>
  uri_lt?: InputMaybe<Scalars["String"]>
  uri_gte?: InputMaybe<Scalars["String"]>
  uri_lte?: InputMaybe<Scalars["String"]>
  uri_in?: InputMaybe<Array<Scalars["String"]>>
  uri_not_in?: InputMaybe<Array<Scalars["String"]>>
  uri_contains?: InputMaybe<Scalars["String"]>
  uri_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_not_contains?: InputMaybe<Scalars["String"]>
  uri_not_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_starts_with?: InputMaybe<Scalars["String"]>
  uri_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_starts_with?: InputMaybe<Scalars["String"]>
  uri_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_ends_with?: InputMaybe<Scalars["String"]>
  uri_ends_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_ends_with?: InputMaybe<Scalars["String"]>
  uri_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  name_not?: InputMaybe<Scalars["String"]>
  name_gt?: InputMaybe<Scalars["String"]>
  name_lt?: InputMaybe<Scalars["String"]>
  name_gte?: InputMaybe<Scalars["String"]>
  name_lte?: InputMaybe<Scalars["String"]>
  name_in?: InputMaybe<Array<Scalars["String"]>>
  name_not_in?: InputMaybe<Array<Scalars["String"]>>
  name_contains?: InputMaybe<Scalars["String"]>
  name_contains_nocase?: InputMaybe<Scalars["String"]>
  name_not_contains?: InputMaybe<Scalars["String"]>
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>
  name_starts_with?: InputMaybe<Scalars["String"]>
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  name_ends_with?: InputMaybe<Scalars["String"]>
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  description?: InputMaybe<Scalars["String"]>
  description_not?: InputMaybe<Scalars["String"]>
  description_gt?: InputMaybe<Scalars["String"]>
  description_lt?: InputMaybe<Scalars["String"]>
  description_gte?: InputMaybe<Scalars["String"]>
  description_lte?: InputMaybe<Scalars["String"]>
  description_in?: InputMaybe<Array<Scalars["String"]>>
  description_not_in?: InputMaybe<Array<Scalars["String"]>>
  description_contains?: InputMaybe<Scalars["String"]>
  description_contains_nocase?: InputMaybe<Scalars["String"]>
  description_not_contains?: InputMaybe<Scalars["String"]>
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>
  description_starts_with?: InputMaybe<Scalars["String"]>
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  description_ends_with?: InputMaybe<Scalars["String"]>
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["BigInt"]>
  createdAt_not?: InputMaybe<Scalars["BigInt"]>
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_not?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  credits_?: InputMaybe<Credit_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Methodology_filter>>>
  or?: InputMaybe<Array<InputMaybe<Methodology_filter>>>
}

export type Methodology_orderBy =
  | "id"
  | "owner"
  | "owner__id"
  | "owner__createdAt"
  | "uri"
  | "name"
  | "description"
  | "createdAt"
  | "updatedAt"
  | "credits"

/** Defines the order direction, either ascending or descending */
export type OrderDirection = "asc" | "desc"

export type Query = {
  account?: Maybe<Account>
  accounts: Array<Account>
  regenerator?: Maybe<Regenerator>
  regenerators: Array<Regenerator>
  methodology?: Maybe<Methodology>
  methodologies: Array<Methodology>
  claim?: Maybe<Claim>
  claims: Array<Claim>
  claimTransfer?: Maybe<ClaimTransfer>
  claimTransfers: Array<ClaimTransfer>
  credit?: Maybe<Credit>
  credits: Array<Credit>
  creditTransfer?: Maybe<CreditTransfer>
  creditTransfers: Array<CreditTransfer>
  certificate?: Maybe<Certificate>
  certificates: Array<Certificate>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type QueryaccountArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Account_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Account_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryregeneratorArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryregeneratorsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Regenerator_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Regenerator_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymethodologyArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymethodologiesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Methodology_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Methodology_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryclaimArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryclaimsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Claim_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Claim_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryclaimTransferArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryclaimTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<ClaimTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ClaimTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycreditArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycreditTransferArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycreditTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<CreditTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<CreditTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycertificateArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycertificatesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Certificate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Certificate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Regenerator = {
  /** An impact project, generator, etc. */
  id: Scalars["String"]
  owner: Account
  uri?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  createdAt: Scalars["BigInt"]
  updatedAt: Scalars["BigInt"]
  claims: Array<Claim>
  credits: Array<Credit>
}

export type RegeneratorclaimsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Claim_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Claim_filter>
}

export type RegeneratorcreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
}

export type Regenerator_filter = {
  id?: InputMaybe<Scalars["String"]>
  id_not?: InputMaybe<Scalars["String"]>
  id_gt?: InputMaybe<Scalars["String"]>
  id_lt?: InputMaybe<Scalars["String"]>
  id_gte?: InputMaybe<Scalars["String"]>
  id_lte?: InputMaybe<Scalars["String"]>
  id_in?: InputMaybe<Array<Scalars["String"]>>
  id_not_in?: InputMaybe<Array<Scalars["String"]>>
  id_contains?: InputMaybe<Scalars["String"]>
  id_contains_nocase?: InputMaybe<Scalars["String"]>
  id_not_contains?: InputMaybe<Scalars["String"]>
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>
  id_starts_with?: InputMaybe<Scalars["String"]>
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_starts_with?: InputMaybe<Scalars["String"]>
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  id_ends_with?: InputMaybe<Scalars["String"]>
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>
  id_not_ends_with?: InputMaybe<Scalars["String"]>
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner?: InputMaybe<Scalars["String"]>
  owner_not?: InputMaybe<Scalars["String"]>
  owner_gt?: InputMaybe<Scalars["String"]>
  owner_lt?: InputMaybe<Scalars["String"]>
  owner_gte?: InputMaybe<Scalars["String"]>
  owner_lte?: InputMaybe<Scalars["String"]>
  owner_in?: InputMaybe<Array<Scalars["String"]>>
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>
  owner_contains?: InputMaybe<Scalars["String"]>
  owner_contains_nocase?: InputMaybe<Scalars["String"]>
  owner_not_contains?: InputMaybe<Scalars["String"]>
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>
  owner_starts_with?: InputMaybe<Scalars["String"]>
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>
  owner_not_starts_with?: InputMaybe<Scalars["String"]>
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  owner_ends_with?: InputMaybe<Scalars["String"]>
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner_not_ends_with?: InputMaybe<Scalars["String"]>
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  owner_?: InputMaybe<Account_filter>
  uri?: InputMaybe<Scalars["String"]>
  uri_not?: InputMaybe<Scalars["String"]>
  uri_gt?: InputMaybe<Scalars["String"]>
  uri_lt?: InputMaybe<Scalars["String"]>
  uri_gte?: InputMaybe<Scalars["String"]>
  uri_lte?: InputMaybe<Scalars["String"]>
  uri_in?: InputMaybe<Array<Scalars["String"]>>
  uri_not_in?: InputMaybe<Array<Scalars["String"]>>
  uri_contains?: InputMaybe<Scalars["String"]>
  uri_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_not_contains?: InputMaybe<Scalars["String"]>
  uri_not_contains_nocase?: InputMaybe<Scalars["String"]>
  uri_starts_with?: InputMaybe<Scalars["String"]>
  uri_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_starts_with?: InputMaybe<Scalars["String"]>
  uri_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  uri_ends_with?: InputMaybe<Scalars["String"]>
  uri_ends_with_nocase?: InputMaybe<Scalars["String"]>
  uri_not_ends_with?: InputMaybe<Scalars["String"]>
  uri_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  name_not?: InputMaybe<Scalars["String"]>
  name_gt?: InputMaybe<Scalars["String"]>
  name_lt?: InputMaybe<Scalars["String"]>
  name_gte?: InputMaybe<Scalars["String"]>
  name_lte?: InputMaybe<Scalars["String"]>
  name_in?: InputMaybe<Array<Scalars["String"]>>
  name_not_in?: InputMaybe<Array<Scalars["String"]>>
  name_contains?: InputMaybe<Scalars["String"]>
  name_contains_nocase?: InputMaybe<Scalars["String"]>
  name_not_contains?: InputMaybe<Scalars["String"]>
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>
  name_starts_with?: InputMaybe<Scalars["String"]>
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>
  name_not_starts_with?: InputMaybe<Scalars["String"]>
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  name_ends_with?: InputMaybe<Scalars["String"]>
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>
  name_not_ends_with?: InputMaybe<Scalars["String"]>
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  description?: InputMaybe<Scalars["String"]>
  description_not?: InputMaybe<Scalars["String"]>
  description_gt?: InputMaybe<Scalars["String"]>
  description_lt?: InputMaybe<Scalars["String"]>
  description_gte?: InputMaybe<Scalars["String"]>
  description_lte?: InputMaybe<Scalars["String"]>
  description_in?: InputMaybe<Array<Scalars["String"]>>
  description_not_in?: InputMaybe<Array<Scalars["String"]>>
  description_contains?: InputMaybe<Scalars["String"]>
  description_contains_nocase?: InputMaybe<Scalars["String"]>
  description_not_contains?: InputMaybe<Scalars["String"]>
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>
  description_starts_with?: InputMaybe<Scalars["String"]>
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>
  description_not_starts_with?: InputMaybe<Scalars["String"]>
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
  description_ends_with?: InputMaybe<Scalars["String"]>
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>
  description_not_ends_with?: InputMaybe<Scalars["String"]>
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
  createdAt?: InputMaybe<Scalars["BigInt"]>
  createdAt_not?: InputMaybe<Scalars["BigInt"]>
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_not?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]>
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]>
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
  claims_?: InputMaybe<Claim_filter>
  credits_?: InputMaybe<Credit_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Regenerator_filter>>>
  or?: InputMaybe<Array<InputMaybe<Regenerator_filter>>>
}

export type Regenerator_orderBy =
  | "id"
  | "owner"
  | "owner__id"
  | "owner__createdAt"
  | "uri"
  | "name"
  | "description"
  | "createdAt"
  | "updatedAt"
  | "claims"
  | "credits"

export type Subscription = {
  account?: Maybe<Account>
  accounts: Array<Account>
  regenerator?: Maybe<Regenerator>
  regenerators: Array<Regenerator>
  methodology?: Maybe<Methodology>
  methodologies: Array<Methodology>
  claim?: Maybe<Claim>
  claims: Array<Claim>
  claimTransfer?: Maybe<ClaimTransfer>
  claimTransfers: Array<ClaimTransfer>
  credit?: Maybe<Credit>
  credits: Array<Credit>
  creditTransfer?: Maybe<CreditTransfer>
  creditTransfers: Array<CreditTransfer>
  certificate?: Maybe<Certificate>
  certificates: Array<Certificate>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type SubscriptionaccountArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Account_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Account_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionregeneratorArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionregeneratorsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Regenerator_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Regenerator_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmethodologyArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmethodologiesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Methodology_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Methodology_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionclaimArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionclaimsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Claim_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Claim_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionclaimTransferArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionclaimTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<ClaimTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ClaimTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncreditArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncreditsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Credit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Credit_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncreditTransferArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncreditTransfersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<CreditTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<CreditTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncertificateArgs = {
  id: Scalars["ID"]
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncertificatesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  first?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Certificate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Certificate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>
  /** The block number */
  number: Scalars["Int"]
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars["String"]
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]
}

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | "allow"
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | "deny"

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>
  Account_filter: Account_filter
  Account_orderBy: Account_orderBy
  BigDecimal: ResolverTypeWrapper<Scalars["BigDecimal"]>
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
  Bytes: ResolverTypeWrapper<Scalars["Bytes"]>
  Certificate: ResolverTypeWrapper<Certificate>
  Certificate_filter: Certificate_filter
  Certificate_orderBy: Certificate_orderBy
  Claim: ResolverTypeWrapper<Claim>
  ClaimTransfer: ResolverTypeWrapper<ClaimTransfer>
  ClaimTransfer_filter: ClaimTransfer_filter
  ClaimTransfer_orderBy: ClaimTransfer_orderBy
  Claim_filter: Claim_filter
  Claim_orderBy: Claim_orderBy
  Credit: ResolverTypeWrapper<Credit>
  CreditTransfer: ResolverTypeWrapper<CreditTransfer>
  CreditTransfer_filter: CreditTransfer_filter
  CreditTransfer_orderBy: CreditTransfer_orderBy
  Credit_filter: Credit_filter
  Credit_orderBy: Credit_orderBy
  Float: ResolverTypeWrapper<Scalars["Float"]>
  ID: ResolverTypeWrapper<Scalars["ID"]>
  Int: ResolverTypeWrapper<Scalars["Int"]>
  Methodology: ResolverTypeWrapper<Methodology>
  Methodology_filter: Methodology_filter
  Methodology_orderBy: Methodology_orderBy
  OrderDirection: OrderDirection
  Query: ResolverTypeWrapper<{}>
  Regenerator: ResolverTypeWrapper<Regenerator>
  Regenerator_filter: Regenerator_filter
  Regenerator_orderBy: Regenerator_orderBy
  String: ResolverTypeWrapper<Scalars["String"]>
  Subscription: ResolverTypeWrapper<{}>
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account
  Account_filter: Account_filter
  BigDecimal: Scalars["BigDecimal"]
  BigInt: Scalars["BigInt"]
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: Scalars["Boolean"]
  Bytes: Scalars["Bytes"]
  Certificate: Certificate
  Certificate_filter: Certificate_filter
  Claim: Claim
  ClaimTransfer: ClaimTransfer
  ClaimTransfer_filter: ClaimTransfer_filter
  Claim_filter: Claim_filter
  Credit: Credit
  CreditTransfer: CreditTransfer
  CreditTransfer_filter: CreditTransfer_filter
  Credit_filter: Credit_filter
  Float: Scalars["Float"]
  ID: Scalars["ID"]
  Int: Scalars["Int"]
  Methodology: Methodology
  Methodology_filter: Methodology_filter
  Query: {}
  Regenerator: Regenerator
  Regenerator_filter: Regenerator_filter
  String: Scalars["String"]
  Subscription: {}
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = entityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
  id: Scalars["String"]
}

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = subgraphIdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
  field: Scalars["String"]
}

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = derivedFromDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AccountResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  regenerators?: Resolver<
    Array<ResolversTypes["Regenerator"]>,
    ParentType,
    ContextType,
    RequireFields<AccountregeneratorsArgs, "skip" | "first">
  >
  methodologies?: Resolver<
    Array<ResolversTypes["Methodology"]>,
    ParentType,
    ContextType,
    RequireFields<AccountmethodologiesArgs, "skip" | "first">
  >
  claims?: Resolver<
    Array<ResolversTypes["Claim"]>,
    ParentType,
    ContextType,
    RequireFields<AccountclaimsArgs, "skip" | "first">
  >
  credits?: Resolver<
    Array<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<AccountcreditsArgs, "skip" | "first">
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigDecimal"], any> {
  name: "BigDecimal"
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt"
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Bytes"], any> {
  name: "Bytes"
}

export type CertificateResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Certificate"] = ResolversParentTypes["Certificate"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  issuedAmount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  issuedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  issuedTo?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  credit?: Resolver<ResolversTypes["Credit"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ClaimResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Claim"] = ResolversParentTypes["Claim"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  value?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  validFrom?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  validTo?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  signer?: Resolver<ResolversTypes["Account"], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  revokedAt?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  regenerator?: Resolver<ResolversTypes["Regenerator"], ParentType, ContextType>
  credits?: Resolver<
    Array<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<ClaimcreditsArgs, "skip" | "first">
  >
  transfers?: Resolver<
    Array<ResolversTypes["ClaimTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<ClaimtransfersArgs, "skip" | "first">
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ClaimTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["ClaimTransfer"] = ResolversParentTypes["ClaimTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  operator?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  from?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  to?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  claim?: Resolver<ResolversTypes["Claim"], ParentType, ContextType>
  value?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CreditResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Credit"] = ResolversParentTypes["Credit"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  value?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  validFrom?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  validTo?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  signer?: Resolver<ResolversTypes["Account"], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  revokedAt?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  claim?: Resolver<ResolversTypes["Claim"], ParentType, ContextType>
  regenerator?: Resolver<ResolversTypes["Regenerator"], ParentType, ContextType>
  methodology?: Resolver<ResolversTypes["Methodology"], ParentType, ContextType>
  certificates?: Resolver<
    Array<ResolversTypes["Certificate"]>,
    ParentType,
    ContextType,
    RequireFields<CreditcertificatesArgs, "skip" | "first">
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CreditTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["CreditTransfer"] = ResolversParentTypes["CreditTransfer"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  operator?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  from?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  to?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>
  credit?: Resolver<ResolversTypes["Credit"], ParentType, ContextType>
  value?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MethodologyResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Methodology"] = ResolversParentTypes["Methodology"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  owner?: Resolver<ResolversTypes["Account"], ParentType, ContextType>
  uri?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  credits?: Resolver<
    Array<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<MethodologycreditsArgs, "skip" | "first">
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  account?: Resolver<
    Maybe<ResolversTypes["Account"]>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountArgs, "id" | "subgraphError">
  >
  accounts?: Resolver<
    Array<ResolversTypes["Account"]>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountsArgs, "skip" | "first" | "subgraphError">
  >
  regenerator?: Resolver<
    Maybe<ResolversTypes["Regenerator"]>,
    ParentType,
    ContextType,
    RequireFields<QueryregeneratorArgs, "id" | "subgraphError">
  >
  regenerators?: Resolver<
    Array<ResolversTypes["Regenerator"]>,
    ParentType,
    ContextType,
    RequireFields<QueryregeneratorsArgs, "skip" | "first" | "subgraphError">
  >
  methodology?: Resolver<
    Maybe<ResolversTypes["Methodology"]>,
    ParentType,
    ContextType,
    RequireFields<QuerymethodologyArgs, "id" | "subgraphError">
  >
  methodologies?: Resolver<
    Array<ResolversTypes["Methodology"]>,
    ParentType,
    ContextType,
    RequireFields<QuerymethodologiesArgs, "skip" | "first" | "subgraphError">
  >
  claim?: Resolver<
    Maybe<ResolversTypes["Claim"]>,
    ParentType,
    ContextType,
    RequireFields<QueryclaimArgs, "id" | "subgraphError">
  >
  claims?: Resolver<
    Array<ResolversTypes["Claim"]>,
    ParentType,
    ContextType,
    RequireFields<QueryclaimsArgs, "skip" | "first" | "subgraphError">
  >
  claimTransfer?: Resolver<
    Maybe<ResolversTypes["ClaimTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryclaimTransferArgs, "id" | "subgraphError">
  >
  claimTransfers?: Resolver<
    Array<ResolversTypes["ClaimTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryclaimTransfersArgs, "skip" | "first" | "subgraphError">
  >
  credit?: Resolver<
    Maybe<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycreditArgs, "id" | "subgraphError">
  >
  credits?: Resolver<
    Array<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycreditsArgs, "skip" | "first" | "subgraphError">
  >
  creditTransfer?: Resolver<
    Maybe<ResolversTypes["CreditTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycreditTransferArgs, "id" | "subgraphError">
  >
  creditTransfers?: Resolver<
    Array<ResolversTypes["CreditTransfer"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycreditTransfersArgs, "skip" | "first" | "subgraphError">
  >
  certificate?: Resolver<
    Maybe<ResolversTypes["Certificate"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycertificateArgs, "id" | "subgraphError">
  >
  certificates?: Resolver<
    Array<ResolversTypes["Certificate"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycertificatesArgs, "skip" | "first" | "subgraphError">
  >
  _meta?: Resolver<
    Maybe<ResolversTypes["_Meta_"]>,
    ParentType,
    ContextType,
    Partial<Query_metaArgs>
  >
}>

export type RegeneratorResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Regenerator"] = ResolversParentTypes["Regenerator"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  owner?: Resolver<ResolversTypes["Account"], ParentType, ContextType>
  uri?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
  claims?: Resolver<
    Array<ResolversTypes["Claim"]>,
    ParentType,
    ContextType,
    RequireFields<RegeneratorclaimsArgs, "skip" | "first">
  >
  credits?: Resolver<
    Array<ResolversTypes["Credit"]>,
    ParentType,
    ContextType,
    RequireFields<RegeneratorcreditsArgs, "skip" | "first">
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"],
> = ResolversObject<{
  account?: SubscriptionResolver<
    Maybe<ResolversTypes["Account"]>,
    "account",
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountArgs, "id" | "subgraphError">
  >
  accounts?: SubscriptionResolver<
    Array<ResolversTypes["Account"]>,
    "accounts",
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountsArgs, "skip" | "first" | "subgraphError">
  >
  regenerator?: SubscriptionResolver<
    Maybe<ResolversTypes["Regenerator"]>,
    "regenerator",
    ParentType,
    ContextType,
    RequireFields<SubscriptionregeneratorArgs, "id" | "subgraphError">
  >
  regenerators?: SubscriptionResolver<
    Array<ResolversTypes["Regenerator"]>,
    "regenerators",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionregeneratorsArgs,
      "skip" | "first" | "subgraphError"
    >
  >
  methodology?: SubscriptionResolver<
    Maybe<ResolversTypes["Methodology"]>,
    "methodology",
    ParentType,
    ContextType,
    RequireFields<SubscriptionmethodologyArgs, "id" | "subgraphError">
  >
  methodologies?: SubscriptionResolver<
    Array<ResolversTypes["Methodology"]>,
    "methodologies",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionmethodologiesArgs,
      "skip" | "first" | "subgraphError"
    >
  >
  claim?: SubscriptionResolver<
    Maybe<ResolversTypes["Claim"]>,
    "claim",
    ParentType,
    ContextType,
    RequireFields<SubscriptionclaimArgs, "id" | "subgraphError">
  >
  claims?: SubscriptionResolver<
    Array<ResolversTypes["Claim"]>,
    "claims",
    ParentType,
    ContextType,
    RequireFields<SubscriptionclaimsArgs, "skip" | "first" | "subgraphError">
  >
  claimTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["ClaimTransfer"]>,
    "claimTransfer",
    ParentType,
    ContextType,
    RequireFields<SubscriptionclaimTransferArgs, "id" | "subgraphError">
  >
  claimTransfers?: SubscriptionResolver<
    Array<ResolversTypes["ClaimTransfer"]>,
    "claimTransfers",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionclaimTransfersArgs,
      "skip" | "first" | "subgraphError"
    >
  >
  credit?: SubscriptionResolver<
    Maybe<ResolversTypes["Credit"]>,
    "credit",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncreditArgs, "id" | "subgraphError">
  >
  credits?: SubscriptionResolver<
    Array<ResolversTypes["Credit"]>,
    "credits",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncreditsArgs, "skip" | "first" | "subgraphError">
  >
  creditTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes["CreditTransfer"]>,
    "creditTransfer",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncreditTransferArgs, "id" | "subgraphError">
  >
  creditTransfers?: SubscriptionResolver<
    Array<ResolversTypes["CreditTransfer"]>,
    "creditTransfers",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncreditTransfersArgs,
      "skip" | "first" | "subgraphError"
    >
  >
  certificate?: SubscriptionResolver<
    Maybe<ResolversTypes["Certificate"]>,
    "certificate",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncertificateArgs, "id" | "subgraphError">
  >
  certificates?: SubscriptionResolver<
    Array<ResolversTypes["Certificate"]>,
    "certificates",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncertificatesArgs,
      "skip" | "first" | "subgraphError"
    >
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes["_Meta_"]>,
    "_meta",
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
}>

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["_Block_"] = ResolversParentTypes["_Block_"],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["Bytes"]>, ParentType, ContextType>
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>
  timestamp?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["_Meta_"] = ResolversParentTypes["_Meta_"],
> = ResolversObject<{
  block?: Resolver<ResolversTypes["_Block_"], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  hasIndexingErrors?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  Certificate?: CertificateResolvers<ContextType>
  Claim?: ClaimResolvers<ContextType>
  ClaimTransfer?: ClaimTransferResolvers<ContextType>
  Credit?: CreditResolvers<ContextType>
  CreditTransfer?: CreditTransferResolvers<ContextType>
  Methodology?: MethodologyResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Regenerator?: RegeneratorResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = CyrusofedenCapTypes.Context & BaseMeshContext

const baseDir = pathModule.join(
  typeof __dirname === "string" ? __dirname : "/",
  "..",
)

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split("\\")
    .join("/")
    .replace(baseDir + "/", "")
  switch (relativeModuleId) {
    case ".graphclient/sources/cyrusofeden/cap/introspectionSchema":
      return import("./sources/cyrusofeden/cap/introspectionSchema") as T

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`),
      )
  }
}

const rootStore = new MeshStore(
  ".graphclient",
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
  }),
  {
    readonly: true,
    validate: false,
  },
)

export const rawServeConfig: YamlConfig.Config["serve"] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub()
  const sourcesStore = rootStore.child("sources")
  const logger = new DefaultLogger("GraphClient")
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child("cache"),
    pubsub,
    logger,
  } as any)

  const sources: MeshResolvedSource[] = []
  const transforms: MeshTransform[] = []
  const additionalEnvelopPlugins: MeshPlugin<any>[] = []
  const cyrusofedenCapTransforms = []
  const additionalTypeDefs = [] as any[]
  const cyrusofedenCapHandler = new GraphqlHandler({
    name: "cyrusofeden/cap",
    config: {
      endpoint: "https://api.thegraph.com/subgraphs/name/cyrusofeden/cap",
      timeout: 30000,
      retry: 3,
      batch: true,
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("cyrusofeden/cap"),
    logger: logger.child("cyrusofeden/cap"),
    importFn,
  })
  cyrusofedenCapTransforms[0] = new AutoPaginationTransform({
    apiName: "cyrusofeden/cap",
    config: { validateSchema: true },
    baseDir,
    cache,
    pubsub,
    importFn,
    logger,
  })
  sources[0] = {
    name: "cyrusofeden/cap",
    handler: cyrusofedenCapHandler,
    transforms: cyrusofedenCapTransforms,
  }
  const additionalResolvers = [] as any[]
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child("bareMerger"),
    store: rootStore.child("bareMerger"),
  })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return []
    },
    fetchFn,
  }
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then(meshOptions => getMesh(meshOptions))
      .then(mesh => {
        const id = mesh.pubsub.subscribe("destroy", () => {
          meshInstance$ = undefined
          mesh.pubsub.unsubscribe(id)
        })
        return mesh
      })
  }
  return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
