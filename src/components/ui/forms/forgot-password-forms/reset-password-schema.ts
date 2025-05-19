import { z } from 'zod';

import {
    latinsLettersRegexp,
    numbersRegexp,
    onlyLatinsNumbersSymbolsRegexp,
} from '~/constants/data/regexp';

export const resetPasswordSchema = z
    .object({
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
        passwordConfirm: z.string().nonempty('Повторите пароль'),
    })
    .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
        message: 'Пароли должны совпадать',
        path: ['confirmPassword'],
    });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
