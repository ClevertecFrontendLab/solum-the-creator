import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Textarea,
    TextareaProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormTextareaProps = {
    label?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    helperText?: string;
} & TextareaProps;

export const FormTextarea: React.FC<FormTextareaProps> = ({
    label,
    placeholder,
    error,
    register,
    helperText,
    ...props
}) => (
    <FormControl isInvalid={!!error}>
        {label && (
            <FormLabel mb={1} fontWeight={400}>
                {label}
            </FormLabel>
        )}

        <Textarea {...props} {...register} variant='custom' size='lg' placeholder={placeholder} />

        {helperText && (
            <FormHelperText mt={1} fontSize='xs' color='blackAlpha.700'>
                {helperText}
            </FormHelperText>
        )}

        {error && (
            <FormErrorMessage mt={1} fontSize='xs'>
                {error.message}
            </FormErrorMessage>
        )}
    </FormControl>
);
