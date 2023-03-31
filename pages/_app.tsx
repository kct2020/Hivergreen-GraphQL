import "@refinedev/antd/dist/reset.css"
import "@lib/i18n"
import "nprogress/nprogress.css"
import "@styles/global.css"

import { theme } from "@lib/theme"
import { ConfigProvider } from "antd"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import type { NextPage } from "next"
import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Router from "next/router"
import NProgress from "nprogress"
import { Suspense, useEffect, useState } from "react"
import { Layout } from "src/layout"
import { Header } from "src/layout/header"
import { LoadingPage, LoadingPane } from "src/layout/loading"
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

const App: RefinePage<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router,
}) => {
  const render = Component.noLayout
    ? () => <Component {...pageProps} />
    : () => (
        <Layout Header={Header} Sider={Sider} Title={Title}>
          <Component {...pageProps} />
        </Layout>
      )

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const onStart = () => {
      setLoaded(false)
      NProgress.start()
    }

    const onSettled = () => {
      setLoaded(true)
      NProgress.done()
      window.scroll({ behavior: "smooth", top: 0, left: 0 })
    }

    Router.events.on("routeChangeStart", onStart)
    Router.events.on("routeChangeComplete", onSettled)
    Router.events.on("routeChangeError", onSettled)

    return () => {
      Router.events.off("routeChangeStart", onStart)
      Router.events.off("routeChangeComplete", onSettled)
      Router.events.off("routeChangeError", onSettled)
    }
  }, [setLoaded])

  return (
    <Suspense fallback={<LoadingPage />}>
      <ConfigProvider theme={theme}>
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter>
            <m.div
              animate={isLoaded ? "enter" : "exit"}
              variants={{
                enter: { opacity: 1 },
                exit: { opacity: 0.4 },
              }}
              key={router.pathname}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 3,
              }}
            >
              <Web3App>
                <Suspense fallback={<LoadingPane />}>
                  <RefineApp>{render()}</RefineApp>
                </Suspense>
              </Web3App>
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </ConfigProvider>
    </Suspense>
  )
}

export default appWithTranslation(App)
