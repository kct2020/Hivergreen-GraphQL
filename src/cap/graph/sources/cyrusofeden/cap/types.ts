// @ts-nocheck

import { InContextSdkMethod } from "@graphql-mesh/types"
import { MeshContext } from "@graphql-mesh/runtime"

export namespace CyrusofedenCapTypes {
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

  export type QuerySdk = {
    /** null **/
    account: InContextSdkMethod<Query["account"], QueryaccountArgs, MeshContext>
    /** null **/
    accounts: InContextSdkMethod<
      Query["accounts"],
      QueryaccountsArgs,
      MeshContext
    >
    /** null **/
    regenerator: InContextSdkMethod<
      Query["regenerator"],
      QueryregeneratorArgs,
      MeshContext
    >
    /** null **/
    regenerators: InContextSdkMethod<
      Query["regenerators"],
      QueryregeneratorsArgs,
      MeshContext
    >
    /** null **/
    methodology: InContextSdkMethod<
      Query["methodology"],
      QuerymethodologyArgs,
      MeshContext
    >
    /** null **/
    methodologies: InContextSdkMethod<
      Query["methodologies"],
      QuerymethodologiesArgs,
      MeshContext
    >
    /** null **/
    claim: InContextSdkMethod<Query["claim"], QueryclaimArgs, MeshContext>
    /** null **/
    claims: InContextSdkMethod<Query["claims"], QueryclaimsArgs, MeshContext>
    /** null **/
    claimTransfer: InContextSdkMethod<
      Query["claimTransfer"],
      QueryclaimTransferArgs,
      MeshContext
    >
    /** null **/
    claimTransfers: InContextSdkMethod<
      Query["claimTransfers"],
      QueryclaimTransfersArgs,
      MeshContext
    >
    /** null **/
    credit: InContextSdkMethod<Query["credit"], QuerycreditArgs, MeshContext>
    /** null **/
    credits: InContextSdkMethod<Query["credits"], QuerycreditsArgs, MeshContext>
    /** null **/
    creditTransfer: InContextSdkMethod<
      Query["creditTransfer"],
      QuerycreditTransferArgs,
      MeshContext
    >
    /** null **/
    creditTransfers: InContextSdkMethod<
      Query["creditTransfers"],
      QuerycreditTransfersArgs,
      MeshContext
    >
    /** null **/
    certificate: InContextSdkMethod<
      Query["certificate"],
      QuerycertificateArgs,
      MeshContext
    >
    /** null **/
    certificates: InContextSdkMethod<
      Query["certificates"],
      QuerycertificatesArgs,
      MeshContext
    >
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query["_meta"], Query_metaArgs, MeshContext>
  }

  export type MutationSdk = {}

  export type SubscriptionSdk = {
    /** null **/
    account: InContextSdkMethod<
      Subscription["account"],
      SubscriptionaccountArgs,
      MeshContext
    >
    /** null **/
    accounts: InContextSdkMethod<
      Subscription["accounts"],
      SubscriptionaccountsArgs,
      MeshContext
    >
    /** null **/
    regenerator: InContextSdkMethod<
      Subscription["regenerator"],
      SubscriptionregeneratorArgs,
      MeshContext
    >
    /** null **/
    regenerators: InContextSdkMethod<
      Subscription["regenerators"],
      SubscriptionregeneratorsArgs,
      MeshContext
    >
    /** null **/
    methodology: InContextSdkMethod<
      Subscription["methodology"],
      SubscriptionmethodologyArgs,
      MeshContext
    >
    /** null **/
    methodologies: InContextSdkMethod<
      Subscription["methodologies"],
      SubscriptionmethodologiesArgs,
      MeshContext
    >
    /** null **/
    claim: InContextSdkMethod<
      Subscription["claim"],
      SubscriptionclaimArgs,
      MeshContext
    >
    /** null **/
    claims: InContextSdkMethod<
      Subscription["claims"],
      SubscriptionclaimsArgs,
      MeshContext
    >
    /** null **/
    claimTransfer: InContextSdkMethod<
      Subscription["claimTransfer"],
      SubscriptionclaimTransferArgs,
      MeshContext
    >
    /** null **/
    claimTransfers: InContextSdkMethod<
      Subscription["claimTransfers"],
      SubscriptionclaimTransfersArgs,
      MeshContext
    >
    /** null **/
    credit: InContextSdkMethod<
      Subscription["credit"],
      SubscriptioncreditArgs,
      MeshContext
    >
    /** null **/
    credits: InContextSdkMethod<
      Subscription["credits"],
      SubscriptioncreditsArgs,
      MeshContext
    >
    /** null **/
    creditTransfer: InContextSdkMethod<
      Subscription["creditTransfer"],
      SubscriptioncreditTransferArgs,
      MeshContext
    >
    /** null **/
    creditTransfers: InContextSdkMethod<
      Subscription["creditTransfers"],
      SubscriptioncreditTransfersArgs,
      MeshContext
    >
    /** null **/
    certificate: InContextSdkMethod<
      Subscription["certificate"],
      SubscriptioncertificateArgs,
      MeshContext
    >
    /** null **/
    certificates: InContextSdkMethod<
      Subscription["certificates"],
      SubscriptioncertificatesArgs,
      MeshContext
    >
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<
      Subscription["_meta"],
      Subscription_metaArgs,
      MeshContext
    >
  }

  export type Context = {
    ["cyrusofeden/cap"]: {
      Query: QuerySdk
      Mutation: MutationSdk
      Subscription: SubscriptionSdk
    }
  }
}
