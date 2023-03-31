import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import type { SSRConfig } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export type i18NProps = SSRConfig

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [{ params: { locale: "en", id: "0x0" } }],
})

export const getStaticProps: GetStaticProps<i18NProps> = async context => {
  const i18n = await serverSideTranslations(context.locale || "en", ["common"])
  return {
    props: { ...i18n },
    revalidate: 60 * 60 * 24 * 28, // 28 days in seconds
  }
}

export const getServerSideProps: GetServerSideProps<
  i18NProps
> = async context => {
  const i18n = await serverSideTranslations(context.locale || "en", ["common"])
  return { props: { ...i18n } }
}
