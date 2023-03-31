import { isAddress } from "ethers/lib/utils"
import { z } from "zod"

const DisplayType = z.union([
  z.literal("date"),
  z.literal("number"),
  z.literal("boost_number"),
  z.literal("boost_percentage"),
])

export const Attribute = z.object({
  trait_type: z.string(),
  value: z.union([z.string(), z.number()]),
  display_type: DisplayType.optional(),
})

export const Metadata = z.object({
  description: z.string().optional(),
  external_url: z.string().optional(),
  image: z.string().optional(),
  image_data: z.string().optional(),
  name: z.string(),
  attributes: z.array(Attribute),
  background_color: z.string().optional(),
  animation_url: z.string().optional(),
  youtube_url: z.string().optional(),
})

export const Value = z.object({
  value: z
    .number()
    .int()
    .min(0)
    // makes it easier to handle this as a number on the client,
    // though in the future there may come a reason to use a BigNumber,
    // I can't think of any right now.
    .max(2 ** 32 - 1),
  validFrom: z
    .number()
    .int()
    .min(0)
    .max(2 ** 32 - 1),
  validTo: z
    .number()
    .int()
    .min(0)
    .max(2 ** 32 - 1),
  signer: z.string().refine(value => isAddress(value), {
    message: "Invalid Ethereum address",
  }),
  uri: z.string(),
})

export type AttributeType = z.infer<typeof Attribute>
export type MetadataType = z.infer<typeof Metadata>
export type ValueType = z.infer<typeof Value>
