export * from "./list"
export * from "./create"
export * from "./show"

export const claimFields = [
  "id",
  "value",
  "uri",
  "validFrom",
  "validTo",
  { signer: ["id"] },
  { regenerator: ["id"] },
]
