import { TitleProps } from "@refinedev/core"
import { ConnectKitButton } from "connectkit"
import React from "react"

export const Title: React.FC<TitleProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 64,
        borderBottom: "2px solid #f6f7f9",
      }}
    >
      <ConnectKitButton mode="light" showAvatar showBalance={false} />
    </div>
  )
}
