import "@refinedev/antd/dist/reset.css"
import "@lib/i18n"
import "nprogress/nprogress.css"
import "@styles/global.css"

import { theme } from "@lib/theme"
import { ConfigProvider } from "antd"
import type { NextPage } from "next"
import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Router from "next/router"
import NProgress from "nprogress"
import { Suspense } from "react"
import { Layout } from "src/layout"
import { Header } from "src/layout/header"
import { Sider } from "src/layout/sider"
import { Title } from "src/layout/title"

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
        <Suspense>
          <RefineApp>{render()}</RefineApp>
        </Suspense>
      </Web3App>
    </ConfigProvider>
  )
}

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default appWithTranslation(App)
