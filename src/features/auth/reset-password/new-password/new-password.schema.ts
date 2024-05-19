import { z } from "zod";

export const newPasswordSchema = z
  .object({
    password: z.string().min(3, "Пароль слишком короткий"),
    confirmPassword: z.string().min(3, "Повторите пароль"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Введенные пароли не совпадают",
  });

export type NewPasswordFormProps = z.infer<typeof newPasswordSchema>;
