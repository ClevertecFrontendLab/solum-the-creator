import { Menu, MenuList } from '@chakra-ui/react';
import { useState } from 'react';

import { normalizeValue } from '~/utils/string-formatter';

import { MultiSelectCustomInput } from './multi-select-custom-input';
import { MultiSelectOptions } from './multi-select-options';
import { MultiSelectTrigger } from './multi-select-trigger';

export type Option = {
    label: string;
    value: string;
};

type MultiSelectMenuProps = {
    options: Option[];
    selected: Option[];
    onChange: (selected: Option[]) => void;
    placeholder?: string;
    allowCustomInput?: boolean;
    inputPlaceholder?: string;
    isDisabled?: boolean;
};

export const MultiSelectMenu: React.FC<MultiSelectMenuProps> = ({
    options,
    selected,
    onChange,
    placeholder = 'Выберите из списка...',
    allowCustomInput = false,
    inputPlaceholder = 'Введите значение',
    isDisabled = false,
}) => {
    const [availableOptions, setAvailableOptions] = useState<Option[]>(options);
    const [inputValue, setInputValue] = useState('');

    const toggleOption = (option: Option) => {
        const exists = selected.some((o) => o.value === option.value);
        onChange(exists ? selected.filter((o) => o.value !== option.value) : [...selected, option]);
    };

    const addCustomOption = () => {
        const trimmedValue = inputValue.trim();
        const newValue = trimmedValue.toLowerCase().replace(/\s+/g, '-');

        const alreadyExists = availableOptions.some((opt) => opt.value === newValue);

        if (alreadyExists || !trimmedValue) {
            setInputValue('');
            return;
        }

        const newOption: Option = {
            label: inputValue,
            value: inputValue.toLowerCase().replace(/\s+/g, '-'),
        };

        setAvailableOptions((prev) => [...prev, newOption]);
        onChange([...selected, newOption]);
        setInputValue('');
    };

    return (
        <Menu closeOnSelect={false} variant='menu-select' matchWidth={true}>
            {({ isOpen }) => (
                <>
                    <MultiSelectTrigger
                        selected={selected}
                        placeholder={placeholder}
                        isOpen={isOpen}
                        isDisabled={isDisabled}
                    />
                    <MenuList zIndex={3}>
                        <MultiSelectOptions
                            options={availableOptions}
                            selected={selected}
                            onToggle={toggleOption}
                        />
                        {allowCustomInput && (
                            <MultiSelectCustomInput
                                value={inputValue}
                                onChange={setInputValue}
                                onAdd={addCustomOption}
                                placeholder={inputPlaceholder}
                                isDuplicate={availableOptions.some(
                                    (opt) => opt.value === normalizeValue(inputValue),
                                )}
                            />
                        )}
                    </MenuList>
                </>
            )}
        </Menu>
    );
};
