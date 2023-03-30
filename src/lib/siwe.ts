import { configureServerSideSIWE } from "connectkit-next-siwe"

const secret = process.env.SESSION_SECRET
if (!secret) {
  throw new Error("SESSION_SECRET unset")
}

const server = configureServerSideSIWE({
  session: {
    password: secret,
    cookieName: "cap-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
})

export const { getSession, apiRouteHandler } = server
