import type { RefineLayoutHeaderProps } from "@refinedev/antd"
import { Layout as AntdLayout } from "antd"
import { ConnectKitButton } from "connectkit"
import React from "react"

export const Header: React.FC<RefineLayoutHeaderProps> = () => (
  <AntdLayout.Header
    style={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0px 24px",
      height: "64px",
    }}
  >
    <ConnectKitButton showBalance showAvatar />
  </AntdLayout.Header>
)
