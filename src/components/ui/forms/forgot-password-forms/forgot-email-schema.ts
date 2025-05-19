import { z } from 'zod';

export const forgotEmailSchema = z.object({
    email: z
        .string()
        .nonempty('Введите e-mail')
        .email('Введите корректный e-mail')
        .max(50, 'Максимальная длина 50 символов'),
});

export type ForgotEmailFormValues = z.infer<typeof forgotEmailSchema>;
