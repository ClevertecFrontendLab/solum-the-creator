import z from 'zod';

import { schemaMessages } from '~/constants/texts/schemes';

export const loginSchema = z.object({
    login: z.string().nonempty(schemaMessages.requiredLogin).max(50, schemaMessages.maxLength),
    password: z
        .string()
        .nonempty(schemaMessages.requiredPassword)
        .max(50, schemaMessages.maxLength),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
