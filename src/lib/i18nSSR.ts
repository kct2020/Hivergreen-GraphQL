import type { GetServerSideProps } from "next"
import type { SSRConfig } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const getServerSideProps: GetServerSideProps<
  SSRConfig
> = async context => ({
  props: serverSideTranslations(context.locale ?? "en", ["common"]),
})
