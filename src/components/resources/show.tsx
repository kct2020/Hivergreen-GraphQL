import {
  Show as RefineShow,
  ShowProps as RefineShowProps,
} from "@refinedev/antd"
import Head from "next/head"
import React from "react"

export const Show: React.FC<RefineShowProps> = props => {
  return (
    <>
      {props.title && (
        <Head>
          <title>{props.title}</title>
        </Head>
      )}
      <RefineShow {...props} />
    </>
  )
}

Show.defaultProps = {
  goBack: false,
}
