"use client"

import { FileSearchOutlined } from "@ant-design/icons"
import type { Claim, Regenerator } from "@cap/sdk/graph"
import { ClaimList } from "@components/claims/list"
import * as ipfs from "@lib/ipfs"
import { Show, useTable } from "@refinedev/antd"
import { HttpError, useShow } from "@refinedev/core"
import { Button, Col, Row, Statistic, Typography } from "antd"
import type { NextPage } from "next"

const RegeneratorShowPage: NextPage = () => {
  const {
    queryResult: { data },
  } = useShow<Regenerator>({
    meta: {
      fields: ["id", "uri", { owner: ["id"] }],
    },
  })

  const regenerator = data?.data

  const { tableProps: claimTableProps, sorters: claimSorters } = useTable<
    Claim,
    HttpError
  >({
    resource: "claims",
    meta: {
      fields: ["id", "value", "uri", "validFrom", "validTo", "createdAt"],
    },
    pagination: {
      pageSize: 12,
    },
    filters: {
      permanent: [
        { field: "regenerator", operator: "eq", value: regenerator?.id },
      ],
    },
    sorters: {
      initial: [{ field: "createdAt", order: "desc" }],
    },
    queryOptions: {
      refetchInterval: 10 * 1000,
      enabled: !!regenerator,
    },
  })

  return (
    <Show
      isLoading={!regenerator}
      title={`Regenerator ${regenerator?.id ?? null}`}
    >
      {regenerator && (
        <>
          <Row gutter={16}>
            <Col span={5}>
              <Statistic
                title="Documents"
                valueRender={() => (
                  <Button
                    type="primary"
                    icon={<FileSearchOutlined />}
                    href={regenerator.uri ? ipfs.viewURL(regenerator.uri) : "#"}
                    target="_blank"
                  >
                    View Documents
                  </Button>
                )}
              />
            </Col>
            <Col span={5}>
              <Statistic title="Owner" value={regenerator.owner.id} />
            </Col>
          </Row>
          <Typography.Title
            level={2}
            style={{ marginTop: 48, marginBottom: 32 }}
          >
            Claims
          </Typography.Title>
          <ClaimList tableProps={claimTableProps} sorters={claimSorters} />
        </>
      )}
    </Show>
  )
}

export default RegeneratorShowPage
