import { Option } from '~/components/shared/selects/multi-select-menu/multi-select-menu';

export const useFilterOption = (
    selectedValues: string[],
    allOptions: Option[],
    setValues: (values: string[]) => void,
) => {
    const selectedOptions = allOptions.filter((opt) => selectedValues.includes(opt.value));

    const toggleOption = (option: Option) => {
        const isSelected = selectedValues.includes(option.value);
        const updated = isSelected
            ? selectedValues.filter((v) => v !== option.value)
            : [...selectedValues, option.value];

        setValues(updated);
    };

    return { selectedOptions, toggleOption };
};
