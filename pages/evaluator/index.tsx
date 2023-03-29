import { DeploymentUnitOutlined, InboxOutlined } from "@ant-design/icons"
import type { Evaluator } from "@cap/sdk/graph"
import { EvaluatorList, evaluatorFields } from "@components/evaluators"
import { useModalForm } from "@refinedev/antd"
import { List } from "@refinedev/antd"
import { Form, Input, Upload } from "antd"
import { Modal } from "antd"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuthIdentity } from "src/authProvider"

const EvaluatorIndexPage: NextPage = () => {
  const router = useRouter()

  const { modalProps, form, formProps, show, close } = useModalForm<Evaluator>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    mutationMode: "undoable",
    submitOnEnter: true,
    meta: {
      fields: evaluatorFields,
    },
  })

  const { data: identity } = useAuthIdentity()

  useEffect(() => {
    form.setFieldValue("owner", identity?.id)
  }, [identity?.id])

  return (
    <>
      <List
        createButtonProps={{ onClick: show, icon: <DeploymentUnitOutlined /> }}
      >
        <EvaluatorList />
      </List>
      <Modal
        {...modalProps}
        onOk={close}
        onCancel={close}
        style={{ maxWidth: 600 }}
      >
        <Form {...formProps} layout="vertical" requiredMark="optional">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea autoSize={{ minRows: 3 }} />
          </Form.Item>
          <Form.Item
            name="uri"
            label="Documentation"
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

export default EvaluatorIndexPage
