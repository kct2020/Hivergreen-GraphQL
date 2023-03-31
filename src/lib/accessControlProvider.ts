import { AccessControlProvider } from "@refinedev/core"
import { getAccount } from "@wagmi/core"

export const makeAccessControlProvider = (
  siwe: any, // eslint-disable-line @typescript-eslint/no-explicit-any
): AccessControlProvider => ({
  async can({ resource, action, params }) {
    if (action === "create") {
      return { can: siwe.isSignedIn }
    }

    if (action === "edit") {
      if (siwe.account?.address === params?.owner?.id) {
        return { can: true }
      }

      return { can: false, reason: `You can only edit your own ${resource}` }
    }

    return { can: true }
  },
})
