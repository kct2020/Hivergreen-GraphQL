import { AuthBindings, useGetIdentity } from "@refinedev/core"
import {
  connect,
  disconnect,
  fetchEnsAvatar,
  fetchEnsName,
  getAccount,
} from "@wagmi/core"
import { polygon } from "@wagmi/core/chains"
import { InjectedConnector } from "@wagmi/core/connectors/injected"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"
import { SafeConnector } from "@wagmi/core/connectors/safe"
import { publicProvider } from "@wagmi/core/providers/public"
import { getDefaultClient } from "connectkit"
import {
  Address,
  Connector,
  configureChains,
  createClient,
  mainnet,
} from "wagmi"

export { ConnectKitButton, ConnectKitProvider } from "connectkit"
export { WagmiConfig } from "wagmi"

export const chains = [polygon, mainnet]

export const { provider } = configureChains(chains, [publicProvider()])

export const wagmiClient = createClient(
  getDefaultClient({
    appName: "CAP",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID!,
    autoConnect: true,
    chains,
    provider,
    connectors: [
      new InjectedConnector({ chains }),
      new MetaMaskConnector({ chains }),
      new SafeConnector({ chains }),
      // new WalletConnectConnector({
      //   options: {
      //     projectId: "",
      //     metadata: {
      //       name: "CAP",
      //       description: "Climate Attestation Protocol",
      //       url: "https://cap.climate",
      //       icons: ["https://cap.climate/icon.png"],
      //     },
      //   },
      // }),
    ],
  }),
)

export type LoginParams = Parameters<typeof connect>[0]

export interface IIdentity {
  id: Address
  connector: Connector
  name: string
  avatar: string
}

export const useAuthIdentity = () => useGetIdentity<IIdentity>()

export const authProvider: AuthBindings = {
  login: async ({ chainId, connector }: LoginParams) => {
    await connect({ chainId, connector })
    return {
      success: true,
      redirectTo: "/dashboard",
    }
  },
  logout: async () => {
    await disconnect()
    return {
      success: true,
      redirectTo: "/",
    }
  },
  check: async () => {
    const { status } = getAccount()
    const authenticated = status === "connected"
    return { authenticated }
  },
  getPermissions: async () => {
    return null
  },
  getIdentity: async () => {
    const { address, connector } = getAccount()
    if (!address || !connector) {
      return null
    }

    const [name, avatar] = await Promise.all([
      fetchEnsName({ address, chainId: 1 }),
      fetchEnsAvatar({ address, chainId: 1 }),
    ])
    const identity: IIdentity = {
      id: address,
      connector: connector,
      name: name ?? "",
      avatar: avatar ?? "",
    }
    return identity
  },
  onError: async error => {
    console.error(error)
    return { error }
  },
}
