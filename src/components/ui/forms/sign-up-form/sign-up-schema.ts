import z from 'zod';

import {
    latinsLettersRegexp,
    numbersRegexp,
    onlyCyrillicRegexp,
    onlyLatinsNumbersSymbolsRegexp,
    startsWithCyrillicRegexp,
} from '~/constants/data/regexp';
import { schemaMessages } from '~/constants/texts/schemes';

export const signUpSchema = z
    .object({
        firstName: z
            .string()
            .nonempty(schemaMessages.requiredFirstName)
            .max(50, schemaMessages.maxLength)
            .refine((val) => startsWithCyrillicRegexp.test(val), schemaMessages.nameCyrillicStart)
            .refine((val) => onlyCyrillicRegexp.test(val), schemaMessages.nameCyrillicOnly),
        lastName: z
            .string()
            .nonempty(schemaMessages.requiredLastName)
            .max(50, schemaMessages.maxLength)
            .refine((val) => startsWithCyrillicRegexp.test(val), schemaMessages.nameCyrillicStart)
            .refine((val) => onlyCyrillicRegexp.test(val), schemaMessages.nameCyrillicOnly),
        email: z
            .string()
            .nonempty(schemaMessages.requiredEmail)
            .max(50, schemaMessages.maxLength)
            .email(schemaMessages.emailInvalid),
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
        confirmPassword: z.string().nonempty(schemaMessages.requiredConfirmPassword),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: schemaMessages.passwordsMismatch,
        path: ['confirmPassword'],
    });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
