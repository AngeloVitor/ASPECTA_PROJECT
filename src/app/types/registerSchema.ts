import { z } from "zod";
import { registerSchema } from "@/app/schemas/registerSchema";

export type registerSchemaType = z.infer<typeof registerSchema>;
