"use client"

import { queryClient } from "@contexts/web3"
import { makeAccessControlProvider } from "@lib/accessControlProvider"
import { makeAuthProvider } from "@lib/authProvider"
import { dataProvider } from "@lib/dataProvider"
import { resources } from "@lib/resources"
import { notificationProvider } from "@refinedev/antd"
import { Refine } from "@refinedev/core"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router"
import { useSIWE } from "connectkit"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { useTranslation } from "next-i18next"
import Router from "next/router"
import React, { useEffect, useMemo, useState } from "react"

export const RouteTransitions: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const onStart = () => {
      setLoading(true)
    }

    const onSettled = () => {
      setLoading(false)
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
  }, [setLoading])

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div
          animate={isLoading ? "exit" : "enter"}
          variants={{
            enter: { opacity: 1 },
            exit: { opacity: 0.4 },
          }}
          key={Router.pathname}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

export const RefineApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { t, i18n } = useTranslation()

  const i18nProvider = {
    translate: t,
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => "en",
  }

  const siwe = useSIWE()

  const authProvider = useMemo(() => makeAuthProvider(siwe), [siwe])
  const accessControlProvider = useMemo(
    () => makeAccessControlProvider(siwe),
    [siwe],
  )

  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider}
        notificationProvider={notificationProvider}
        accessControlProvider={accessControlProvider}
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
        <RouteTransitions>{children}</RouteTransitions>
        <RefineKbar />
        <UnsavedChangesNotifier />
      </Refine>
    </RefineKbarProvider>
  )
}

export default RefineApp
