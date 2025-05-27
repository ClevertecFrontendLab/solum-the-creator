import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Textarea,
    TextareaProps,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
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
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        handleInput();
    }, []);

    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel mb={1} fontWeight={400}>
                    {label}
                </FormLabel>
            )}

            <Textarea
                {...props}
                {...register}
                ref={(e) => {
                    textareaRef.current = e;
                    register?.ref(e);
                }}
                onInput={handleInput}
                variant='custom'
                size='lg'
                placeholder={placeholder}
                overflow='hidden'
            />

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
};
