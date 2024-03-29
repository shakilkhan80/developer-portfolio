
import { ZCAppointment } from "@/validator";
import { z } from "zod";

export type TCAppointment = z.infer<typeof ZCAppointment>;
