import { makeAuthProvider } from "@lib/authProvider"
import { getSession } from "@lib/siwe"
import { ErrorComponent } from "@refinedev/antd"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default ErrorComponent

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context.req, context.res)
  const props = await serverSideTranslations(context.locale ?? "en", ["common"])

  const { authenticated, redirectTo } = await makeAuthProvider({
    isLoading: false,
    isSignedIn: Boolean(session.address),
    data: session,
  }).check()

  if (!authenticated && redirectTo) {
    const redirectBackTo = encodeURIComponent(context.req.url || "/")
    const redirect = {
      destination: `${redirectTo}?to=${redirectBackTo}`,
      permanent: false,
    }

    return { props, redirect }
  }

  return {
    notFound: true,
  }
}
