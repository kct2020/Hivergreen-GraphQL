import { configureClientSIWE } from "connectkit-next-siwe"

export const { Provider: SIWEProvider } = configureClientSIWE({
  apiRoutePrefix: "/api/siwe", // Your API route directory
  statement: "Login with your wallet", // optional
})
