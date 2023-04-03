import { DashboardTwoTone, UnorderedListOutlined } from "@ant-design/icons"
import { theme } from "@lib/theme"
import { Title as DefaultTitle } from "@refinedev/antd"
import type { RefineLayoutSiderProps } from "@refinedev/antd"
import {
  CanAccess,
  ITreeMenu,
  pickNotDeprecated,
  useLink,
  useMenu,
  useRefineContext,
  useTitle,
  useTranslate,
} from "@refinedev/core"
import { Button, ConfigProvider, Drawer, Grid, Layout, Menu } from "antd"
import React, { CSSProperties, useState } from "react"

const width = 240
const drawerButtonStyles: CSSProperties = {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  position: "fixed",
  top: 64,
  zIndex: 999,
}

export const Sider: React.FC<RefineLayoutSiderProps> = ({
  Title: TitleFromProps,
  render,
  meta,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const Link = useLink()
  const { hasDashboard } = useRefineContext()
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu({ meta })
  const breakpoint = Grid.useBreakpoint()
  const TitleFromContext = useTitle()
  const translate = useTranslate()

  const isMobile = breakpoint.lg == null ? false : !breakpoint.lg

  const RenderToTitle = TitleFromProps ?? TitleFromContext ?? DefaultTitle

  const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) =>
    tree.map((item: ITreeMenu) => {
      const {
        icon,
        label,
        route,
        key,
        name,
        children,
        parentName,
        meta,
        options,
      } = item

      if (children.length !== 0) {
        return (
          <CanAccess
            key={item.key}
            resource={name.toLowerCase()}
            action="list"
            params={{ resource: item }}
          >
            <Menu.SubMenu
              key={item.key}
              icon={icon ?? <UnorderedListOutlined />}
              title={label}
            >
              {renderTreeView(children, selectedKey)}
            </Menu.SubMenu>
          </CanAccess>
        )
      }

      const isSelected = key === selectedKey
      const isRoute = !(
        pickNotDeprecated(meta?.parent, options?.parent, parentName) != null &&
        children.length === 0
      )

      return (
        <CanAccess
          key={item.key}
          resource={name.toLowerCase()}
          action="list"
          params={{ resource: item }}
        >
          <Menu.Item
            key={item.key}
            style={{ fontWeight: isSelected ? "bold" : "normal" }}
            icon={icon ?? (isRoute && <UnorderedListOutlined />)}
          >
            <Link to={route ?? ""}>{label}</Link>
            {!collapsed && isSelected && (
              <div className="ant-menu-tree-arrow" />
            )}
          </Menu.Item>
        </CanAccess>
      )
    })

  const dashboard = hasDashboard ? (
    <Menu.Item
      key="dashboard"
      icon={<DashboardTwoTone twoToneColor={theme.token!.colorPrimary} />}
      style={{ fontWeight: selectedKey === "/" ? "bold" : "normal" }}
    >
      <Link to="/">{translate("dashboard.title", "Dashboard")}</Link>
      {!collapsed && selectedKey === "/" && (
        <div className="ant-menu-tree-arrow" />
      )}
    </Menu.Item>
  ) : null
  const items = renderTreeView(menuItems, selectedKey)

  const MenuItems = (
    <>
      <Menu
        selectedKeys={selectedKey ? [selectedKey] : []}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        style={{ borderInlineEnd: 0 }}
        onClick={() => {
          setDrawerOpen(false)
          if (!breakpoint.lg) {
            setCollapsed(true)
          }
        }}
      >
        {render ? (
          render({
            items,
            dashboard,
            collapsed,
            logout: null,
          })
        ) : (
          <>
            {dashboard}
            {items}
          </>
        )}
      </Menu>
    </>
  )

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorItemBg: "transparent",
            colorItemText: "#222",
            colorItemTextSelected: "#222",
            colorItemBgSelected: "transparent",
            colorItemTextHover: "#222",
          },
        },
      }}
    >
      {!isMobile ? (
        <Layout.Sider
          width={width}
          collapsed={false}
          breakpoint="lg"
          trigger={null}
        >
          <RenderToTitle collapsed={false} />
          {MenuItems}
        </Layout.Sider>
      ) : (
        <>
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="left"
            closable={false}
            width={width}
            bodyStyle={{ padding: 0 }}
            maskClosable={true}
          >
            <Layout>
              <Layout.Sider
                style={{ height: "100vh", overflow: "hidden" }}
                width={width}
              >
                <RenderToTitle collapsed={false} />
                {MenuItems}
              </Layout.Sider>
            </Layout>
          </Drawer>
          <Button
            style={drawerButtonStyles}
            size="large"
            onClick={() => setDrawerOpen(true)}
            icon={<DashboardTwoTone twoToneColor={theme.token!.colorPrimary} />}
          />
        </>
      )}
    </ConfigProvider>
  )
}
