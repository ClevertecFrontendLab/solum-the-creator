import { Box, Checkbox, List } from '@chakra-ui/react';

import { Option } from './multi-select-menu';

type MultiSelectOptionsProps = {
    options: Option[];
    selected: Option[];
    onToggle: (option: Option) => void;
    getOptionTestId?: (option: Option, index: number) => string | undefined;
};

export const MultiSelectOptions: React.FC<MultiSelectOptionsProps> = ({
    options,
    selected,
    onToggle,
    getOptionTestId,
}) => {
    const selectedValues = new Set(selected.map((opt) => opt.value));

    const handleToggle = (option: Option) => () => onToggle(option);

    return (
        <List variant='color-variation'>
            {options.map((option, index) => (
                <Box as='li' key={option.value} px={4} py={1.5}>
                    <Checkbox
                        variant='brand'
                        isChecked={selectedValues.has(option.value)}
                        size='sm'
                        onChange={handleToggle(option)}
                        data-test-id={getOptionTestId?.(option, index)}
                    >
                        <Box noOfLines={1} wordBreak='break-word'>
                            {option.label}
                        </Box>
                    </Checkbox>
                </Box>
            ))}
        </List>
    );
};
