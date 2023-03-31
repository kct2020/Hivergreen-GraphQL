import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

export const LoadingPane: React.FC<{ style?: React.CSSProperties }> = ({
  style = {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 32,
        ...style,
      }}
    >
      <Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
    </div>
  )
}

export const LoadingPage: React.FC = () => (
  <LoadingPane style={{ height: "100vh", width: "100vw" }} />
)
