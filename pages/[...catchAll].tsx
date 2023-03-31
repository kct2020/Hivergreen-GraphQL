import { getServerSideProps as getTranslationProps } from "@lib/i18nSSR"
import { getSession } from "@lib/siwe"
import { ErrorComponent } from "@refinedev/antd"
import { GetServerSideProps } from "next"
import { makeAuthProvider } from "src/authProvider"

export default ErrorComponent

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context.req, context.res)

  const { authenticated, redirectTo } = await makeAuthProvider({
    isLoading: false,
    isSignedIn: Boolean(session.address),
    data: session,
  }).check()

  const props = await getTranslationProps(context)

  if (!authenticated && redirectTo) {
    const redirectBackTo = encodeURIComponent(context.req.url || "/")
    const redirect = {
      destination: `${redirectTo}?to=${redirectBackTo}`,
      permanent: false,
    }

    return { ...props, redirect }
  }

  return props
}
