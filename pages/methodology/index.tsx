"use client"

import { DeploymentUnitOutlined, InboxOutlined } from "@ant-design/icons"
import type { Methodology } from "@cap/sdk/graph"
import { MethodologyList } from "@components/methodologies/list"
import { queryClient } from "@contexts/web3"
import { useModalForm } from "@refinedev/antd"
import { List } from "@refinedev/antd"
import { Form, Input, Upload } from "antd"
import { Modal } from "antd"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { mintMethodology } from "src/mutations/group"

export { getStaticProps } from "@lib/i18nSSG"

const MethodologyIndexPage: NextPage = () => {
  const router = useRouter()

  const { modalProps, formProps, show, close } = useModalForm<Methodology>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    submitOnEnter: true,
    meta: { action: mintMethodology },
    onMutationSuccess() {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["default", "methodologies"],
      })
    },
  })

  return (
    <>
      <List
        createButtonProps={{ onClick: show, icon: <DeploymentUnitOutlined /> }}
      >
        <MethodologyList />
      </List>
      <Modal
        {...modalProps}
        onCancel={close}
        style={{ maxWidth: 600 }}
        destroyOnClose
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
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 12 }} />
          </Form.Item>
          <Form.Item
            name="fileList"
            label="Documentation"
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

export default MethodologyIndexPage
