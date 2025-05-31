import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Textarea,
    TextareaProps,
    useMergeRefs,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormTextareaProps = {
    label?: string;
    error?: FieldError;
    helperText?: string;
    showErrorText?: boolean;
} & TextareaProps &
    UseFormRegisterReturn;

export const FormTextarea: React.FC<FormTextareaProps> = ({
    label,
    placeholder,
    error,
    helperText,
    showErrorText = true,
    ref: registerRef,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const mergedRef = useMergeRefs(registerRef, textareaRef);

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
                ref={mergedRef}
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

            {error && showErrorText && (
                <FormErrorMessage mt={1} fontSize='xs'>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
};
