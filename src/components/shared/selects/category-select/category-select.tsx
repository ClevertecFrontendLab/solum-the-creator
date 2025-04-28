import { getCategiresOptions } from '~/utils/categories';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type CategorySelectProps = {
    selectedCategories: Option[];
    onChange: (selected: Option[]) => void;
    isDisabled?: boolean;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({
    selectedCategories,
    onChange,
    isDisabled,
}) => {
    const initialCategories: Option[] = getCategiresOptions();

    const testIdMap: Record<string, string> = {
        vegan: 'checkbox-веганская кухня',
    };

    return (
        <MultiSelectMenu
            options={initialCategories}
            selected={selectedCategories}
            onChange={onChange}
            isDisabled={isDisabled}
            placeholder='Категория'
            dataTestId='filter-menu-button-категория'
            getOptionTestId={(opt) => testIdMap[opt.value]}
        />
    );
};
