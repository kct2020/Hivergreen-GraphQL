import * as actions from "@cap/sdk/actions"
import * as ipfs from "@lib/ipfs"
import dayjs from "dayjs"
import { BigNumber, Signer } from "ethers"
import _ from "lodash"
import { Address } from "wagmi"

export interface ClaimVariables {
  regeneratorID: string
  impactAmount: number
  validRange: [dayjs.Dayjs, dayjs.Dayjs]
  fileList: File[]
}

export const claim = async (
  signer: Signer,
  { regeneratorID, impactAmount, validRange, fileList }: ClaimVariables,
) => {
  const [getURI, uploadComplete] = ipfs.upload(fileList)
  const [uri, address, chainId] = await Promise.all([
    getURI,
    signer.getAddress(),
    signer.getChainId(),
  ])

  const contract = actions.getCap({
    chainId: chainId as any,
    signerOrProvider: signer,
  })

  const [validFrom, validTo] = validRange.map(date => date.unix())
  const params = {
    regeneratorID: BigNumber.from(regeneratorID),
    attestation: {
      signer: address as Address,
      value: BigNumber.from(impactAmount),
      validFrom,
      validTo,
      uri,
    },
  }

  const tx = await contract.claim(params)

  await Promise.all([tx.wait(), uploadComplete])

  return tx.hash
}

export interface AccreditVariables {
  claimID: string
  methodologyID: string
  impactAmount: number
  validRange: [dayjs.Dayjs, dayjs.Dayjs]
  fileList: File[]
}

export const accredit = async (
  signer: Signer,
  {
    claimID,
    methodologyID,
    impactAmount,
    validRange,
    fileList,
  }: AccreditVariables,
) => {
  const [getURI, uploadComplete] = ipfs.upload(fileList)
  const [uri, address, chainId] = await Promise.all([
    getURI,
    signer.getAddress(),
    signer.getChainId(),
  ])

  const contract = actions.getCap({
    chainId: chainId as any,
    signerOrProvider: signer,
  })

  const [validFrom, validTo] = validRange.map(date => date.unix())
  const params = {
    claimID: BigNumber.from(claimID),
    methodologyID: BigNumber.from(methodologyID),
    attestation: {
      signer: address as Address,
      value: BigNumber.from(impactAmount),
      validFrom,
      validTo,
      uri,
    },
  }

  const tx = await contract.accredit(params)

  await Promise.all([tx.wait(), uploadComplete])

  return tx.hash
}
