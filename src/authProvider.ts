import * as actions from "@cap/sdk/actions"
import { AuthBindings } from "@refinedev/core"
import { fetchSigner } from "@wagmi/core"

export { WagmiConfig } from "wagmi"

export const makeAuthProvider = (siwe: any): AuthBindings => ({
  register: async () => ({ success: true }),
  login: async () => {
    const success: boolean = await siwe.signIn()
    return { success }
  },
  logout: async () => {
    const success: boolean = await siwe.signOut()
    return { success }
  },
  check: async () => ({ authenticated: siwe.isSignedIn }),
  getPermissions: async () => {},
  getIdentity: () => siwe.data ?? null,
  onError: async error => {
    console.error(error)
    return { error }
  },
})
