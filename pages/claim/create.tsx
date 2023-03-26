import { InboxOutlined } from "@ant-design/icons"
import type { Claim, Regenerator } from "@cap/sdk/graph"
import { ClaimCreate } from "@components/claims"
import { Create, useForm, useSelect } from "@refinedev/antd"
import { IResourceComponentsProps, useGetIdentity } from "@refinedev/core"
import { DatePicker, Form, InputNumber, Select, Upload } from "antd"
import React, { useEffect } from "react"
import { useAuthIdentity } from "src/authProvider"

const CreateClaim: React.FC<IResourceComponentsProps> = () => {
  const { data: identity } = useAuthIdentity()
  const { form, formProps, saveButtonProps } = useForm<Claim>()
  const { selectProps } = useSelect<Regenerator>({ resource: "regenerators" })

  useEffect(() => {
    form.setFieldValue("attestation[signer]", identity?.id)
  }, [identity?.id])

  return (
    <Create
      saveButtonProps={saveButtonProps}
      resource="claims"
      wrapperProps={{ style: { maxWidth: "480px" } }}
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
        >
          <Upload.Dragger>
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
    </Create>
  )
}

export default CreateClaim
