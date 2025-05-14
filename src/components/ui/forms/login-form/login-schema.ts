import z from 'zod';

export const loginSchema = z.object({
    login: z.string().nonempty('Введите логин').max(50, 'Максимальная длина 50 символов'),
    password: z.string().nonempty('Введите пароль').max(50, 'Максимальная длина 50 символов'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
