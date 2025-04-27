import { Flex, Icon, IconButton, Input } from '@chakra-ui/react';

import PlusIcon from '~/assets/icons/plus-icon.svg?react';

type MultiSelectCustomInputProps = {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onAdd: () => void;
    isDuplicate: boolean;
};

export const MultiSelectCustomInput: React.FC<MultiSelectCustomInputProps> = ({
    value,
    placeholder,
    onChange,
    onAdd,
    isDuplicate,
}) => {
    const isDisabled = !value.trim() || isDuplicate;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isDisabled) {
            onAdd();
        }
    };

    return (
        <Flex py={2} pl={6} pr={2} gap={2} align='center'>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                flexShrink={1}
                size='sm'
                data-test-id='add-other-allergen'
            />
            <IconButton
                aria-label='Добавить значение'
                size='xs'
                variant='clear'
                icon={<Icon as={PlusIcon} />}
                onClick={onAdd}
                isDisabled={isDisabled}
                data-test-id='add-allergen-button'
            />
        </Flex>
    );
};
