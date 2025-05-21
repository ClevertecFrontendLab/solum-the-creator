import z from 'zod';

import {
    latinsLettersRegexp,
    numbersRegexp,
    onlyCyrillicRegexp,
    onlyLatinsNumbersSymbolsRegexp,
    startsWithCyrillicRegexp,
} from '~/constants/data/regexp';

export const signUpSchema = z
    .object({
        firstName: z
            .string()
            .nonempty('Введите имя')
            .max(50, 'Максимальная длина 50 символов')
            .refine(
                (val) => startsWithCyrillicRegexp.test(val),
                'Должно начинаться с кириллицы А-Я',
            )
            .refine((val) => onlyCyrillicRegexp.test(val), 'Только кириллица А-Я, и "-"'),
        lastName: z
            .string()
            .nonempty('Введите фамилию')
            .max(50, 'Максимальная длина 50 символов')
            .refine(
                (val) => startsWithCyrillicRegexp.test(val),
                'Должно начинаться с кириллицы А-Я',
            )
            .refine((val) => onlyCyrillicRegexp.test(val), 'Только кириллица А-Я, и "-"'),
        email: z
            .string()
            .nonempty('Введите e-mail')
            .max(50, 'Максимальная длина 50 символов')
            .email('Введите корректный e-mail'),
        login: z
            .string()
            .nonempty('Введите логин')
            .max(50, 'Максимальная длина 50 символов')
            .min(5, 'Не соответствует формату')
            .refine((val) => onlyLatinsNumbersSymbolsRegexp.test(val), 'Не соответствует формату'),
        password: z
            .string()
            .nonempty('Введите пароль')
            .max(50, 'Максимальная длина 50 символов')
            .min(8, 'Не соответствует формату')
            .refine((val) => onlyLatinsNumbersSymbolsRegexp.test(val), 'Не соответствует формату')
            .refine(
                (val) => latinsLettersRegexp.test(val) && numbersRegexp.test(val),
                'Не соответствует формату',
            ),
        confirmPassword: z.string().nonempty('Повторите пароль'),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: 'Пароли должны совпадать',
        path: ['confirmPassword'],
    });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
