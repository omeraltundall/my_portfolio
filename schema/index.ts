import * as z from "zod"

export const SendMailSchema = z.object({
  email: z.string().email({
    message: "Email is required."
  }),
  message: z.string().min(1, {
    message: "Message is required."
  })
})