import type { GetStaticProps } from "next"
import type { SSRConfig } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export type i18NProps = SSRConfig

export const getStaticProps: GetStaticProps<i18NProps> = async context => {
  const i18n = await serverSideTranslations(context.locale ?? "en", ["common"])
  return { props: { ...i18n } }
}
