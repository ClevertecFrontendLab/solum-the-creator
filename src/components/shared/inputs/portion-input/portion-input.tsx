import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from '@chakra-ui/react';

type PortionInputProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
};

export const PortionInput: React.FC<PortionInputProps> = ({
    value,
    onChange,
    min = 1,
    max = 20,
}) => {
    const handleChange = (_valueAsString: string, valueAsNumber: number) => {
        if (!isNaN(valueAsNumber) && valueAsNumber >= min && valueAsNumber <= max) {
            onChange(valueAsNumber);
        }
    };

    return (
        <Flex align='center' justify='flex-end' gap={2} flexWrap='wrap'>
            <Text whiteSpace='nowrap'>Порций</Text>
            <NumberInput
                size='md'
                value={value}
                min={min}
                max={max}
                w={{ base: '4.5rem', sm: '5.625rem' }}
                onChange={handleChange}
                color='black'
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper data-test-id='increment-stepper' />
                    <NumberDecrementStepper data-test-id='decrement-stepper' />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    );
};
