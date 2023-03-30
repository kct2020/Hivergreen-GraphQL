import type { GetServerSideProps } from "next"
import type { SSRConfig } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export type i18NProps = SSRConfig

export const getServerSideProps: GetServerSideProps<
  i18NProps
> = async context => ({
  props: serverSideTranslations(context.locale ?? "en", ["common"]),
})
