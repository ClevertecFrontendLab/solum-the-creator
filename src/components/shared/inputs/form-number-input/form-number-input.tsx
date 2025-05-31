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
    dataTestid?: string;
} & Omit<NumberInputProps, 'onChange' | 'value'>;

export const FormNumberInput: React.FC<FormNumberInputProps> = ({
    name,
    label,
    leftIcon,
    rightIcon,
    helperText,
    showErrorText = true,
    dataTestid,
    ...props
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const error = errors[name as keyof typeof errors] as FieldError | undefined;

    const handleChange =
        (onChange: (value: string | number) => void) =>
        (valueAsString: string, valueAsNumber: number) => {
            const isIntermediate =
                valueAsString === '' || valueAsString === '-' || isNaN(valueAsNumber);
            onChange(isIntermediate ? valueAsString : valueAsNumber);
        };

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
                            onChange={handleChange(field.onChange)}
                            clampValueOnBlur={false}
                            colorScheme='gray'
                            focusBorderColor={error ? 'red.500' : 'gray.200'}
                        >
                            <NumberInputField
                                pr={rightIcon ? '2.5rem' : undefined}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                data-test-id={dataTestid}
                                borderColor={error ? 'red.500' : 'gray.200'}
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
