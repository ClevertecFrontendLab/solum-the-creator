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
import { Controller, FieldError, useFormContext } from 'react-hook-form';

type FormNumberInputProps = {
    name: string;
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    helperText?: string;
    showErrorText?: boolean;
} & Omit<NumberInputProps, 'onChange' | 'value'>;

export const FormNumberInput: React.FC<FormNumberInputProps> = ({
    name,
    label,
    leftIcon,
    rightIcon,
    helperText,
    showErrorText = true,
    ...props
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const error = errors[name as keyof typeof errors] as FieldError | undefined;

    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel mb={1} fontWeight={400}>
                    {label}
                </FormLabel>
            )}

            <InputGroup>
                {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}

                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <NumberInput
                            {...props}
                            value={field.value ?? ''}
                            onChange={(value) => {
                                const number = Number(value);
                                field.onChange(isNaN(number) ? '' : number);
                            }}
                            clampValueOnBlur={false}
                            colorScheme='gray'
                        >
                            <NumberInputField
                                pr={rightIcon ? '2.5rem' : undefined}
                                onBlur={field.onBlur}
                                ref={field.ref}
                            />

                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    )}
                />

                {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
            </InputGroup>

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
