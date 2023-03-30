import "@refinedev/antd/dist/reset.css"
import "@lib/i18n"

import { Layout } from "@components/layout"
import { Header } from "@components/layout/header"
import { Sider } from "@components/layout/sider"
import { Title } from "@components/layout/title"
import { theme } from "@lib/theme"
import { ConfigProvider } from "antd"
import type { NextPage } from "next"
import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"

const Web3App = dynamic(() => import("@contexts/web3"), { ssr: false })
const RefineApp = dynamic(() => import("@contexts/refine"), { ssr: false })

export type RefinePage<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean
}

interface AppPropsWithLayout extends AppProps {
  Component: RefinePage
}

const App: RefinePage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const render = Component.noLayout
    ? () => <Component {...pageProps} />
    : () => (
        <Layout Header={Header} Sider={Sider} Title={Title}>
          <Component {...pageProps} />
        </Layout>
      )

  return (
    <ConfigProvider theme={theme}>
      <Web3App>
        <RefineApp>{render()}</RefineApp>
      </Web3App>
    </ConfigProvider>
  )
}

export default appWithTranslation(App)
