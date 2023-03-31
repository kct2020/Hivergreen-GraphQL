import {
  CheckCircleOutlined,
  CompassOutlined,
  DeploymentUnitOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons"
import { ResourceProps } from "@refinedev/core"

export const resources: ResourceProps[] = [
  {
    name: "regenerator",
    list: "/regenerator",
    create: "/regenerator?create=modal",
    edit: "/regenerator/:id/edit",
    show: "/regenerator/:id/show",
    meta: {
      icon: <CompassOutlined />,
    },
  },
  {
    name: "claim",
    list: "/claim",
    create: "/claim?create=modal",
    show: "/claim/:id/show",
    meta: {
      icon: <PlusCircleOutlined />,
    },
  },
  {
    name: "methodology",
    list: "/methodology",
    create: "/methodology?create=modal",
    edit: "/methodology/:id/edit",
    show: "/methodology/:id/show",
    meta: {
      icon: <DeploymentUnitOutlined />,
    },
  },
  {
    name: "credit",
    list: "/credit",
    create: "/credit?create=modal",
    edit: "/credit/:id/edit",
    show: "/credit/:id/show",
    meta: {
      icon: <CheckCircleOutlined />,
    },
  },
  // {
  //   name: "certificate",
  //   list: "/certificate",
  //   show: "/certificate/show/:id",
  //   meta: {
  //     icon: <SafetyCertificateOutlined />,
  //   },
  // },
]
