import { AuthBindings } from "@refinedev/core"

export { WagmiConfig } from "wagmi"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  getPermissions: async () => undefined,
  getIdentity: () => siwe.data ?? null,
  onError: async error => {
    console.error(error)
    return { error }
  },
})
