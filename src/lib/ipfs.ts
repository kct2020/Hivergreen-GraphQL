import { CIDString, Filelike, PutOptions, Web3Storage } from "web3.storage"

export const client = new Web3Storage({
  token: process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN!,
})

export const upload = (files: Iterable<Filelike>, options: PutOptions = {}) => {
  let resolveCID

  const cid = new Promise<CIDString>(r => (resolveCID = r))
  const upload = client.put(files, {
    ...options,
    onRootCidReady: resolveCID,
  })

  return [cid, upload] as const
}

export const metadataFile = (metadata: unknown) =>
  new File([Buffer.from(JSON.stringify(metadata))], "metadata.json", {
    type: "application/json",
  })

export const viewURL = (cid: CIDString) => `https://w3s.link/ipfs/${cid}`
