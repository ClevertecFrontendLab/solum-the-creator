import { z } from 'zod';

import { schemaMessages } from '~/constants/texts/schemes';

export const forgotEmailSchema = z.object({
    email: z
        .string()
        .nonempty(schemaMessages.requiredEmail)
        .max(50, schemaMessages.maxLength)
        .email(schemaMessages.emailInvalid),
});

export type ForgotEmailFormValues = z.infer<typeof forgotEmailSchema>;
