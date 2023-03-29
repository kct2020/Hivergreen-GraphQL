import { InboxOutlined } from "@ant-design/icons"
import { PlusCircleOutlined } from "@ant-design/icons"
import type { Claim, Regenerator } from "@cap/sdk/graph"
import { ClaimList, claimFields } from "@components/claims"
import { useModalForm, useSelect } from "@refinedev/antd"
import { List } from "@refinedev/antd"
import { DatePicker, Form, InputNumber, Select, Upload } from "antd"
import { Modal } from "antd"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuthIdentity } from "src/authProvider"

const ClaimIndexPage: NextPage = () => {
  const router = useRouter()

  const { modalProps, form, formProps, show, close } = useModalForm<Claim>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    mutationMode: "undoable",
    submitOnEnter: true,
    meta: {
      fields: claimFields,
    },
  })

  const { data: identity } = useAuthIdentity()
  const { selectProps } = useSelect<Regenerator>({
    resource: "regenerators",
    meta: { fields: ["id"] },
  })

  useEffect(() => {
    form.setFieldValue("attestation[signer]", identity?.id)
  }, [identity?.id])

  return (
    <>
      <List createButtonProps={{ onClick: show, icon: <PlusCircleOutlined /> }}>
        <ClaimList />
      </List>
      <Modal
        {...modalProps}
        onOk={close}
        onCancel={close}
        style={{ maxWidth: 600 }}
      >
        <Form {...formProps} layout="vertical" requiredMark="optional">
          <Form.Item
            name="attestation[signer]"
            hidden
            rules={[{ required: true }]}
          />
          <Form.Item
            name="regeneratorID"
            label="Regenerator"
            rules={[{ required: true }]}
          >
            <Select {...selectProps} showSearch placeholder="Regenerator" />
          </Form.Item>
          <Form.Item
            name="attestation[value]"
            label="Amount"
            rules={[{ required: true }]}
          >
            <InputNumber
              controls={false}
              addonAfter="tCO2e"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="attestation[valid]"
            label="Time Period"
            rules={[{ required: true }]}
          >
            <DatePicker.RangePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="attestation[uri]"
            label="Evidence"
            rules={[{ required: true }]}
            valuePropName="fileList"
            getValueFromEvent={event =>
              Array.isArray(event) ? event : event.fileList
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
