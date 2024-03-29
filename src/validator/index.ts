import { z } from "zod";

export const ZCAppointment = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
});
