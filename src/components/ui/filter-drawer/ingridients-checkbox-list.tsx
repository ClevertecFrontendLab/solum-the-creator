import { Box, Checkbox, Heading, VStack } from '@chakra-ui/react';

import { Option } from '../../shared/selects/multi-select-menu/multi-select-menu';

type IngridientsCheckboxListProps = {
    title: string;
    ingridients: Option[];
    onChange: (ingridient: Option) => void;
    checkedIngridients: Option[];
};

export const IngridientsCheckboxList: React.FC<IngridientsCheckboxListProps> = ({
    title,
    ingridients,
    onChange,
    checkedIngridients,
}) => {
    const selectedValues = new Set(checkedIngridients.map((ingridient) => ingridient.value));

    return (
        <VStack w='100%' align='start' gap={3}>
            <Heading as='h4' size='md' fontSize='md'>
                {title}
            </Heading>
            {ingridients.map((ingridient) => (
                <Checkbox
                    key={ingridient.value}
                    variant='brand'
                    isChecked={selectedValues.has(ingridient.value)}
                    size='md'
                    onChange={() => onChange(ingridient)}
                    data-test-id={ingridient.value === 'картошка' ? 'checkbox-картошка' : undefined}
                >
                    <Box noOfLines={1} wordBreak='break-word'>
                        {ingridient.label}
                    </Box>
                </Checkbox>
            ))}
        </VStack>
    );
};
