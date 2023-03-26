import "@refinedev/antd/dist/reset.css"
import "@lib/i18n"

import {
  AuditOutlined,
  CheckCircleOutlined,
  CompassOutlined,
  DeploymentUnitOutlined,
  EyeOutlined,
  FileDoneOutlined,
  PlusCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons"
import { Layout } from "@components/layout"
import { Header } from "@components/layout/header"
import { Sider } from "@components/layout/sider"
import { Title } from "@components/layout/title"
import { SIWEProvider } from "@lib/siwe/provider"
import { theme } from "@lib/theme"
import { notificationProvider } from "@refinedev/antd"
import { Refine } from "@refinedev/core"
import { GraphQLClient } from "@refinedev/graphql"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router"
import { ConfigProvider } from "antd"
import { ConnectKitProvider } from "connectkit"
import type { NextPage } from "next"
import { appWithTranslation, useTranslation } from "next-i18next"
import { AppProps } from "next/app"
import { WagmiConfig, authProvider, wagmiClient } from "src/authProvider"
import { dataProvider } from "src/dataProvider"

const API_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_SUBGRAPH_URL is not defined")
}

const gqlClient = new GraphQLClient(API_URL)
const gqlDataProvider = dataProvider(gqlClient)

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: NextPageWithLayout<AppPropsWithLayout> = ({
  Component,
  pageProps,
}) => {
  const renderComponent = Component.noLayout
    ? () => <Component {...pageProps} />
    : () => (
        <Layout Header={Header} Sider={Sider} Title={Title}>
          <Component {...pageProps} />
        </Layout>
      )

  const { t, i18n } = useTranslation()

  const i18nProvider = {
    translate: t,
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => "en",
  }

  return (
    <>
      <ConfigProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <SIWEProvider>
            <RefineKbarProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={gqlDataProvider}
                notificationProvider={notificationProvider}
                authProvider={authProvider}
                i18nProvider={i18nProvider}
                resources={[
                  {
                    name: "regenerator",
                    list: "/regenerator",
                    create: "/regenerator/create",
                    edit: "/regenerator/edit/:id",
                    show: "/regenerator/show/:id",
                    meta: {
                      icon: <CompassOutlined />,
                    },
                  },
                  {
                    name: "claim",
                    list: "/claim",
                    create: "/claim/create",
                    show: "/claim/show/:id",
                    meta: {
                      icon: <PlusCircleOutlined />,
                    },
                  },
                  {
                    name: "evaluators",
                    meta: {
                      icon: <EyeOutlined />,
                    },
                  },
                  {
                    name: "protocol",
                    list: "/protocol",
                    create: "/protocol/create",
                    edit: "/protocol/edit/:id",
                    show: "/protocol/show/:id",
                    meta: {
                      parent: "evaluators",
                      icon: <DeploymentUnitOutlined />,
                    },
                  },
                  {
                    name: "accreditation",
                    list: "/accreditation",
                    create: "/accreditation/create",
                    show: "/accreditation/show/:id",
                    edit: "/accreditation/edit/:id",
                    meta: {
                      parent: "evaluators",
                      icon: <FileDoneOutlined />,
                    },
                  },
                  {
                    name: "credit",
                    list: "/credit",
                    show: "/credit/show/:id",
                    create: "/credit/create",
                    meta: {
                      icon: <CheckCircleOutlined />,
                    },
                  },
                  {
                    name: "certificate",
                    list: "/certificate",
                    show: "/certificate/show/:id",
                    create: "/certificate/create",
                    meta: {
                      icon: <SafetyCertificateOutlined />,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
              >
                <ConnectKitProvider>{renderComponent()}</ConnectKitProvider>
                <RefineKbar />
                <UnsavedChangesNotifier />
              </Refine>
            </RefineKbarProvider>
          </SIWEProvider>
        </WagmiConfig>
      </ConfigProvider>
    </>
  )
}

export default appWithTranslation(App)
