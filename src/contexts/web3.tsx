"use client"

import { QueryClient } from "@tanstack/react-query"
import { polygon } from "@wagmi/chains"
import { ConnectKitProvider, getDefaultClient } from "connectkit"
import { configureClientSIWE } from "connectkit-next-siwe"
import React from "react"
import { WagmiConfig, createClient } from "wagmi"

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_KEY
if (!alchemyId) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_KEY unset")
}

export const chains = [polygon]

export const queryClient = new QueryClient()

export const wagmiClient = createClient({
  ...getDefaultClient({ appName: "🧢", chains, alchemyId }),
  queryClient,
})

const { Provider: SIWEProvider } = configureClientSIWE({
  apiRoutePrefix: "/api/auth",
})

export const Web3App: React.FC<React.PropsWithChildren> = ({ children }) => (
  <WagmiConfig client={wagmiClient}>
    <SIWEProvider>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </SIWEProvider>
  </WagmiConfig>
)

export default Web3App
