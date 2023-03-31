"use client"

import { CheckCircleOutlined, InboxOutlined } from "@ant-design/icons"
import { Claim, Credit, Methodology } from "@cap/sdk/graph"
import { CreditList } from "@components/credits/list"
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
import { accredit } from "src/mutations/attestations"

export { getStaticProps } from "@lib/i18nSSR"

const CreditIndexPage: RefinePage = () => {
  const router = useRouter()

  const { modalProps, formProps, show, close } = useModalForm<Credit>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    submitOnEnter: true,
    meta: { action: accredit, fields: ["id"] },
    onMutationSuccess() {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["default", "credits"],
      })
    },
  })

  const { selectProps: claimSelectProps } = useSelect<Claim>({
    resource: "claims",
    optionValue: "id",
    meta: { fields: ["id"] },
    onSearch: value => [{ field: "id", operator: "contains", value }],
  })

  const { data: account } = useSIWE()
  const { selectProps: methodologySelectProps } = useSelect<Methodology>({
    resource: "methodologies",
    optionValue: "id",
    filters: [{ field: "owner", operator: "eq", value: account?.address }],
    meta: { fields: ["id", { owner: ["id"] }] },
    onSearch: value => [{ field: "id", operator: "contains", value }],
  })

  const { tableProps, sorters } = useTable<Credit, HttpError>({
    meta: {
      fields: [
        "id",
        "value",
        "uri",
        "validFrom",
        "validTo",
        "createdAt",
        { signer: ["id"] },
        { claim: [{ regenerator: ["id"] }] },
        { methodology: ["id"] },
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
      <List
        createButtonProps={{ onClick: show, icon: <CheckCircleOutlined /> }}
      >
        <CreditList tableProps={tableProps} sorters={sorters} />
      </List>
      <Modal
        {...modalProps}
        onCancel={close}
        style={{ maxWidth: 600 }}
        destroyOnClose
      >
        <Form {...formProps} layout="vertical" requiredMark="optional">
          <Form.Item name="claimID" label="Claim" rules={[{ required: true }]}>
            <Select {...claimSelectProps} showSearch placeholder="Claim" />
          </Form.Item>
          <Form.Item
            name="methodologyID"
            label="Methodology"
            rules={[{ required: true }]}
          >
            <Select
              {...methodologySelectProps}
              showSearch
              placeholder="Methodology"
            />
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

export default CreditIndexPage
