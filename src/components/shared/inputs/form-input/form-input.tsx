import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    InputProps,
    InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
    label?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    showPasswordToggle?: boolean;
    helperText?: string;
} & InputProps;

export const FormInput: React.FC<FormInputProps> = ({
    label,
    placeholder,
    type = 'text',
    error,
    register,
    leftIcon,
    rightIcon,
    helperText,
    showPasswordToggle = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (type !== 'password') {
            event.target.value = event.target.value.trim();
        }

        register?.onBlur?.(event);
        props.onBlur?.(event);
    };

    const inputType =
        isPassword && showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel mb={1} fontWeight={400}>
                    {label}
                </FormLabel>
            )}

            <InputGroup>
                {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}

                <Input
                    size='lg'
                    {...props}
                    {...register}
                    variant='custom'
                    type={inputType}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                />

                {isPassword && showPasswordToggle ? (
                    <InputRightElement
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        onMouseLeave={() => setShowPassword(false)}
                        cursor='pointer'
                        userSelect='none'
                        data-test-id='password-visibility-button'
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </InputRightElement>
                ) : (
                    rightIcon && <InputRightElement>{rightIcon}</InputRightElement>
                )}
            </InputGroup>

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
