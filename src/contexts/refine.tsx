"use client"

import { queryClient } from "@contexts/web3"
import { resources } from "@lib/resources"
import { notificationProvider } from "@refinedev/antd"
import { Refine } from "@refinedev/core"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router"
import { useSIWE } from "connectkit"
import { useTranslation } from "next-i18next"
import React, { useMemo } from "react"
import { makeAuthProvider } from "src/authProvider"
import { dataProvider } from "src/dataProvider"

export const RefineApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { t, i18n } = useTranslation()

  const i18nProvider = {
    translate: t,
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => "en",
  }

  const siwe = useSIWE()

  const authProvider = useMemo(() => makeAuthProvider(siwe), [siwe])

  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider}
        notificationProvider={notificationProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        resources={resources}
        options={{
          syncWithLocation: true,
          mutationMode: "pessimistic",
          warnWhenUnsavedChanges: true,
          reactQuery: { clientConfig: queryClient },
        }}
      >
        {children}
        <RefineKbar />
        <UnsavedChangesNotifier />
      </Refine>
    </RefineKbarProvider>
  )
}

export default RefineApp
