import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, MenuButton, Tag, TagLabel } from '@chakra-ui/react';

import { Option } from './multi-select-menu';

type MultiSelectTriggerProps = {
    selected: Option[];
    placeholder: string;
    isOpen?: boolean;
    isDisabled?: boolean;
};

export const MultiSelectTrigger: React.FC<MultiSelectTriggerProps> = ({
    selected,
    placeholder,
    isOpen,
    isDisabled,
}) => {
    const borderColor = selected.length > 0 ? 'lime.300' : undefined;
    return (
        <MenuButton
            as={Button}
            variant='menu-select'
            rightIcon={<ChevronDownIcon boxSize={5} transform={isOpen ? 'rotate(180deg)' : ''} />}
            w='100%'
            h='auto'
            minH={10}
            borderColor={borderColor}
            pl={4}
            pr={3}
            py={2}
            isDisabled={isDisabled}
        >
            <Box w='100%' textAlign='left'>
                {selected.length > 0 ? (
                    <Flex flexWrap='wrap' rowGap={1} columnGap={2}>
                        {selected.map((option) => (
                            <Tag
                                key={option.value}
                                variant='outline'
                                size='sm'
                                color='lime.600'
                                colorScheme='lime'
                            >
                                <TagLabel>{option.label}</TagLabel>
                            </Tag>
                        ))}
                    </Flex>
                ) : (
                    <Box as='span' noOfLines={1} wordBreak='break-all'>
                        {placeholder}
                    </Box>
                )}
            </Box>
        </MenuButton>
    );
};
