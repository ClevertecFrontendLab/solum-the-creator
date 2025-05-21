import { z } from 'zod';

export const forgotEmailSchema = z.object({
    email: z
        .string()
        .nonempty('Введите e-mail')
        .max(50, 'Максимальная длина 50 символов')
        .email('Введите корректный e-mail'),
});

export type ForgotEmailFormValues = z.infer<typeof forgotEmailSchema>;
