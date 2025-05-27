import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Select,
    SelectProps,
} from '@chakra-ui/react';
import { FieldError, useFormContext, UseFormRegisterReturn, useWatch } from 'react-hook-form';

type Option = { label: string; value: string };

type FormSelectProps = {
    label?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    options: Option[];
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    helperText?: string;
    placeholder?: string;
} & Omit<SelectProps, 'placeholder'>;

export const FormSelect: React.FC<FormSelectProps> = ({
    label,
    error,
    register,
    options,
    leftIcon,
    rightIcon,
    helperText,
    placeholder = 'Выберите…',
    ...props
}) => {
    const { control } = useFormContext();
    const fieldName = register?.name;

    const value = useWatch({ control, name: fieldName ?? '' });

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
        e.target.value = e.target.value.trim();
        register?.onBlur?.(e);
        props.onBlur?.(e);
    };

    const isPlaceholder = !value;

    return (
        <FormControl isInvalid={!!error}>
            {label && (
                <FormLabel mb={1} fontWeight={400}>
                    {label}
                </FormLabel>
            )}

            <InputGroup>
                {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}

                <Select
                    size='lg'
                    variant='custom'
                    placeholder={placeholder}
                    iconSize='1.5rem'
                    {...props}
                    {...register}
                    onBlur={handleBlur}
                    sx={{
                        color: isPlaceholder ? 'blackAlpha.700' : 'blackAlpha.900',
                        option: {
                            color: 'blackAlpha.900',
                        },
                    }}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </Select>

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
};
