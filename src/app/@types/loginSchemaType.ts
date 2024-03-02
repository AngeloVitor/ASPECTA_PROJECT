import { z } from "zod";
import { loginSchema } from "@/app/schemas/loginSchema";

export type loginSchemaType = z.infer<typeof loginSchema>;
