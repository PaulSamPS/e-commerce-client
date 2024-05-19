import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Некорректный email"),
  username: z.string().min(3, "Имя слишком короткое"),
  password: z.string().min(3, "Пароль слишком короткий"),
});

export type SignUpFormProps = z.infer<typeof signUpSchema>;
