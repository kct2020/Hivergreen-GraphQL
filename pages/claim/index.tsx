"use client"

import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons"
import type { Claim, Regenerator } from "@cap/sdk/graph"
import { ClaimList } from "@components/claims/list"
import { queryClient } from "@contexts/web3"
import { useModalForm, useSelect, useTable } from "@refinedev/antd"
import { List } from "@refinedev/antd"
import { HttpError } from "@refinedev/core"
import { DatePicker, Form, InputNumber, Select, Upload } from "antd"
import { Modal } from "antd"
import { useSIWE } from "connectkit"
import { useRouter } from "next/router"
import type { RefinePage } from "pages/_app"
import React from "react"
import { claim } from "src/mutations/attestations"
export { getStaticProps } from "@lib/i18nSSG"

const ClaimIndexPage: RefinePage = () => {
  const router = useRouter()

  const { modalProps, formProps, show, close } = useModalForm<Claim>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    submitOnEnter: true,
    meta: { action: claim, fields: ["id"] },
    onMutationSuccess() {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["default", "claims"],
      })
    },
  })

  const { data: account } = useSIWE()
  const { selectProps } = useSelect<Regenerator>({
    resource: "regenerators",
    optionValue: "id",
    filters: [{ field: "owner", operator: "eq", value: account?.address }],
    meta: { fields: ["id", { owner: ["id"] }] },
    onSearch: value => [{ field: "name", operator: "contains", value }],
  })

  const { tableProps, sorters } = useTable<Claim, HttpError>({
    meta: {
      fields: [
        "id",
        "value",
        "uri",
        "validFrom",
        "validTo",
        "createdAt",
        { signer: ["id"] },
        { regenerator: ["id"] },
      ],
    },
    pagination: {
      pageSize: 50,
    },
    sorters: {
      initial: [{ field: "createdAt", order: "desc" }],
    },
    queryOptions: {
      refetchInterval: 10 * 1000,
    },
  })

  return (
    <>
      <List createButtonProps={{ onClick: show, icon: <PlusCircleOutlined /> }}>
        <ClaimList tableProps={tableProps} sorters={sorters} />
      </List>
      <Modal
        {...modalProps}
        onCancel={close}
        style={{ maxWidth: 600 }}
        destroyOnClose
      >
        <Form {...formProps} layout="vertical" requiredMark="optional">
          <Form.Item
            name="regeneratorID"
            label="Regenerator"
            rules={[{ required: true }]}
          >
            <Select {...selectProps} showSearch placeholder="Regenerator" />
          </Form.Item>
          <Form.Item
            name="impactAmount"
            label="Impact Amount"
            rules={[{ required: true }]}
          >
            <InputNumber
              controls={false}
              addonAfter="tCO2e"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="validRange"
            label="Time Period"
            rules={[{ required: true }]}
          >
            <DatePicker.RangePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Documentation"
            name="fileList"
            rules={[{ required: true }]}
            valuePropName="fileList"
            getValueFromEvent={event =>
              event.fileList.map(
                (f: { originFileObj: File }) => f.originFileObj,
              )
            }
          >
            <Upload.Dragger listType="picture" multiple>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click here or drag files to this area to upload
              </p>
              <p className="ant-upload-hint">
                Upload attachments like documents, images, videos, data, etc.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ClaimIndexPage
