import { Box, Checkbox, List, MenuItem } from '@chakra-ui/react';

import { Option } from './multi-select-menu';

type MultiSelectOptionsProps = {
    options: Option[];
    selected: Option[];
    onToggle: (option: Option) => void;
};

export const MultiSelectOptions: React.FC<MultiSelectOptionsProps> = ({
    options,
    selected,
    onToggle,
}) => {
    const selectedValues = new Set(selected.map((opt) => opt.value));

    const handleToggle = (option: Option) => () => onToggle(option);

    return (
        <List variant='color-variation'>
            {options.map((option) => (
                <MenuItem
                    key={option.value}
                    onClick={handleToggle(option)}
                    closeOnSelect={false}
                    px={4}
                    py={1.5}
                >
                    <Checkbox
                        variant='brand'
                        isChecked={selectedValues.has(option.value)}
                        pointerEvents='none'
                        size='sm'
                    >
                        <Box noOfLines={1} wordBreak='break-word'>
                            {option.label}
                        </Box>
                    </Checkbox>
                </MenuItem>
            ))}
        </List>
    );
};
