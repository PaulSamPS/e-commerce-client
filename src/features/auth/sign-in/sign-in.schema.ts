import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(3, "Пароль слишком короткий"),
});

export type SignInFormProps = z.infer<typeof signInSchema>;
