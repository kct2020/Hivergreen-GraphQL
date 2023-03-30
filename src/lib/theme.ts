import { ThemeConfig } from "antd"

const token: ThemeConfig["token"] = {
  colorText: "#222",
  colorPrimary: "#04c981",
  colorFillSecondary: "#f6f7f9",
  colorPrimaryBg: "#cdffe3",
  borderRadius: 6,
  wireframe: false,
}

const components: ThemeConfig["components"] = {
  Layout: {
    colorBgBody: "#f6f7f9",
    colorBgHeader: "#fff",
    colorBgContainer: "#f6f7f9",
    colorBgTrigger: "#fff",
  },
}

export const theme: ThemeConfig = { token, components } as const
