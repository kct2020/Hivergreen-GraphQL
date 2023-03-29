export * from "./list"
export * from "./create"
export * from "./edit"
export * from "./show"

export const accreditationFields = [
  "id",
  "value",
  "uri",
  "validFrom",
  "validTo",
  { signer: ["id"] },
  { regenerator: ["id"] },
  { evaluator: ["id"] },
]
