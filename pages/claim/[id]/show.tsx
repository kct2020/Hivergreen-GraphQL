"use client"

import { FileSearchOutlined } from "@ant-design/icons"
import type { Claim, Credit } from "@cap/sdk/graph"
import { CreditList } from "@components/credits/list"
import { Show } from "@components/resources/show"
import * as ipfs from "@lib/ipfs"
import { ShowButton, useTable } from "@refinedev/antd"
import { HttpError, useShow } from "@refinedev/core"
import { Button, Col, Row, Statistic, Typography } from "antd"
import dayjs from "dayjs"
import type { NextPage } from "next"

export { getStaticProps, getStaticPaths } from "@lib/i18nSSG"

const ClaimShowPage: NextPage = () => {
  const {
    queryResult: { data },
  } = useShow<Claim>({
    meta: {
      fields: [
        "id",
        "value",
        "uri",
        "validFrom",
        "validTo",
        { signer: ["id"] },
        { regenerator: ["id"] },
      ],
    },
  })

  const claim = data?.data

  const { tableProps, sorters } = useTable<Credit, HttpError>({
    resource: "credits",
    meta: {
      fields: [
        "id",
        "value",
        "uri",
        "validFrom",
        "validTo",
        "createdAt",
        "updatedAt",
        { methodology: ["id"] },
      ],
    },
    pagination: {
      pageSize: 12,
    },
    filters: {
      permanent: [{ field: "claim", operator: "eq", value: claim?.id }],
    },
    sorters: {
      initial: [{ field: "updatedAt", order: "desc" }],
    },
    queryOptions: {
      refetchInterval: 10 * 1000,
      enabled: !!claim,
    },
  })

  return (
    <Show
      isLoading={!claim}
      title={`Claim ${claim?.id ?? null}`}
      goBack={false}
    >
      {claim && (
        <>
          <Row gutter={16}>
            <Col span={5}>
              <Statistic
                title="Documents"
                valueRender={() => (
                  <Button
                    type="primary"
                    icon={<FileSearchOutlined />}
                    href={ipfs.viewURL(claim.uri)}
                    target="_blank"
                  >
                    View Documents
                  </Button>
                )}
              />
            </Col>
            <Col span={10}>
              <Statistic
                title="Time Range"
                value={[claim.validFrom, claim.validTo]
                  .map(value => dayjs(parseInt(value)).format("LL"))
                  .join(" – ")}
              />
            </Col>
            <Col span={5}>
              <Statistic title="Claimed Amount" value={claim.value} />
            </Col>
            <Col span={4}>
              <Statistic
                title="Regenerator"
                valueRender={() => (
                  <ShowButton
                    recordItemId={claim.regenerator.id}
                    resource="regenerator"
                  >
                    {claim.regenerator.id}
                  </ShowButton>
                )}
              />
            </Col>
          </Row>
          <Typography.Title
            level={2}
            style={{ marginTop: 48, marginBottom: 32 }}
          >
            Credits
          </Typography.Title>
          <CreditList tableProps={tableProps} sorters={sorters} />
        </>
      )}
    </Show>
  )
}

export default ClaimShowPage
