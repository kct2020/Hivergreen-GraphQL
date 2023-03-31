import * as actions from "@cap/sdk/actions"
import * as ipfs from "@lib/ipfs"
import { Signer } from "ethers"

export interface MintGroupVariables {
  name: string
  description: string
  fileList: File[]
}

const minter =
  (contractName: "Regenerators" | "Methodologies") =>
  async (
    signer: Signer,
    { name, description, fileList }: MintGroupVariables,
  ) => {
    const getChainID = signer.getChainId()
    const [getCID, uploadComplete] = ipfs.upload([
      ...fileList,
      ipfs.metadataFile({ name, description }),
    ])

    const contract = actions[`get${contractName}`]({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chainId: (await getChainID) as any,
      signerOrProvider: signer,
    })

    const tx = await getCID.then(contract.mint)

    await Promise.all([tx.wait(), uploadComplete])

    return tx.hash
  }

export const mintRegenerator = minter("Regenerators")
export const mintMethodology = minter("Methodologies")
