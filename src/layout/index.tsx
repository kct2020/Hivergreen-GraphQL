import type { RefineLayoutLayoutProps } from "@refinedev/antd"
import { Layout as AntdLayout, Grid } from "antd"
import React from "react"

import { Header as DefaultHeader } from "./header"
import { Sider as DefaultSider } from "./sider"

export const Layout: React.FC<RefineLayoutLayoutProps> = ({
  children,
  Header,
  Sider,
  Title,
  Footer,
  OffLayoutArea,
}) => {
  const breakpoint = Grid.useBreakpoint()
  const SiderToRender = Sider ?? DefaultSider
  const HeaderToRender = Header ?? DefaultHeader
  const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <SiderToRender Title={Title} />
      <AntdLayout>
        <HeaderToRender />
        <AntdLayout.Content>
          <div style={{ minHeight: 360, padding: isSmall ? 24 : 12 }}>
            {children}
          </div>
          {OffLayoutArea && <OffLayoutArea />}
        </AntdLayout.Content>
        {Footer && <Footer />}
      </AntdLayout>
    </AntdLayout>
  )
}
