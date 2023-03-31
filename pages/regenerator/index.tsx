"use client"

import { CompassOutlined, InboxOutlined } from "@ant-design/icons"
import type { Regenerator } from "@cap/sdk/graph"
import { RegeneratorList } from "@components/regenerators/list"
import { queryClient } from "@contexts/web3"
import { useModalForm } from "@refinedev/antd"
import { List } from "@refinedev/antd"
import { Form, Input, Upload } from "antd"
import { Modal } from "antd"
import Head from "next/head"
import { useRouter } from "next/router"
import type { RefinePage } from "pages/_app"
import React from "react"
import { mintRegenerator } from "src/mutations/group"

export { getStaticProps } from "@lib/i18nSSG"

const RegeneratorIndexPage: RefinePage = () => {
  const router = useRouter()

  const { modalProps, formProps, show, close } = useModalForm<Regenerator>({
    action: "create",
    defaultVisible: Boolean(router.query.create),
    submitOnEnter: true,
    meta: { action: mintRegenerator },
    onMutationSuccess() {
      queryClient.invalidateQueries({ queryKey: ["default", "regenerators"] })
    },
  })

  return (
    <>
      <Head>
        <title>Regenerators</title>
      </Head>
      <List createButtonProps={{ onClick: show, icon: <CompassOutlined /> }}>
        <RegeneratorList />
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

export default RegeneratorIndexPage
