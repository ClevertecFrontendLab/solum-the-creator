import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, MenuButton, Tag, TagLabel } from '@chakra-ui/react';

import { Option } from './multi-select-menu';

type MultiSelectTriggerProps = {
    selected: Option[];
    placeholder: string;
    isOpen?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    maxVisibleTags?: number;
    dataTestId?: string;
};

export const MultiSelectTrigger: React.FC<MultiSelectTriggerProps> = ({
    selected,
    placeholder,
    isOpen,
    isDisabled,
    isInvalid,
    maxVisibleTags,
    dataTestId,
}) => {
    let borderColor: string;

    if (isInvalid) {
        borderColor = 'red.500';
    } else if (selected.length > 0) {
        borderColor = 'lime.300';
    } else {
        borderColor = 'blackAlpha.400';
    }

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
            data-test-id={dataTestId}
        >
            <Box w='100%' textAlign='left'>
                {selected.length > 0 ? (
                    <Flex flexWrap='wrap' rowGap={1} columnGap={2}>
                        {selected.slice(0, maxVisibleTags ?? selected.length).map((option) => (
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
                        {selected.length > (maxVisibleTags ?? selected.length) && (
                            <Tag variant='outline' size='sm' color='lime.600' colorScheme='lime'>
                                <TagLabel>+{selected.length - (maxVisibleTags ?? 0)}</TagLabel>
                            </Tag>
                        )}
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
