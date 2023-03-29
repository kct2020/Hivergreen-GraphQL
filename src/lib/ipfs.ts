import { Web3Storage } from "web3.storage"

export const client = new Web3Storage({
  token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN!,
})

export const upload = client.put

export const metadataFile = (metadata: unknown) =>
  new File([Buffer.from(JSON.stringify(metadata))], "metadata.json", {
    type: "application/json",
  })
