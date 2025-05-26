import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputProps,
    NumberInputStepper,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormNumberInputProps = {
    label?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    helperText?: string;
} & Omit<NumberInputProps, 'onChange'>;

export const FormNumberInput: React.FC<FormNumberInputProps> = ({
    label,
    error,
    register,
    leftIcon,
    rightIcon,
    helperText,
    ...props
}) => (
    <FormControl isInvalid={!!error}>
        {label && (
            <FormLabel mb={1} fontWeight={400}>
                {label}
            </FormLabel>
        )}

        <InputGroup>
            {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}

            <NumberInput {...props} clampValueOnBlur={false} colorScheme='gray'>
                <NumberInputField {...register} pr={rightIcon ? '2.5rem' : undefined} />

                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
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
