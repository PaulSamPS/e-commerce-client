import { z } from "zod";

export const sendCodeSchema = z.object({
  email: z.string().email("Некорректный email"),
});

export type SendCodeFormProps = z.infer<typeof sendCodeSchema>;
