import { z } from 'zod';

import {
    latinsLettersRegexp,
    numbersRegexp,
    onlyLatinsNumbersSymbolsRegexp,
} from '~/constants/data/regexp';
import { schemaMessages } from '~/constants/texts/schemes';

export const resetPasswordSchema = z
    .object({
        login: z
            .string()
            .nonempty(schemaMessages.requiredLogin)
            .max(50, schemaMessages.maxLength)
            .min(5, schemaMessages.loginFormatInvalid)
            .refine(
                (val) => onlyLatinsNumbersSymbolsRegexp.test(val),
                schemaMessages.loginFormatInvalid,
            ),
        password: z
            .string()
            .nonempty(schemaMessages.requiredPassword)
            .max(50, schemaMessages.maxLength)
            .min(8, schemaMessages.passwordFormatInvalid)
            .refine(
                (val) => onlyLatinsNumbersSymbolsRegexp.test(val),
                schemaMessages.passwordFormatInvalid,
            )
            .refine(
                (val) => latinsLettersRegexp.test(val) && numbersRegexp.test(val),
                schemaMessages.passwordFormatInvalid,
            ),
        passwordConfirm: z.string().nonempty(schemaMessages.requiredConfirmPassword),
    })
    .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
        message: schemaMessages.passwordsMismatch,
        path: ['passwordConfirm'],
    });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
