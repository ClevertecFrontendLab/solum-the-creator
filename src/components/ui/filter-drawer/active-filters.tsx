import { Flex } from '@chakra-ui/react';

import { Option } from '../selects/multi-select-menu/multi-select-menu';
import { FilterTag } from './filter-tag';

type ActiveFiltersProps = {
    selectedCategories: Option[];
    selectedAuthors: Option[];
    selectedMeatTypes: Option[];
    selectedSideTypes: Option[];
    selectedAllergens: Option[];
    isExcludeAllergens: boolean;

    onRemoveCategory: (value: string) => void;
    onRemoveAuthor: (value: string) => void;
    onRemoveMeatType: (value: string) => void;
    onRemoveSideType: (value: string) => void;
    onRemoveAllergen: (value: string) => void;
};

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
    selectedCategories,
    selectedAuthors,
    selectedMeatTypes,
    selectedSideTypes,
    selectedAllergens,
    isExcludeAllergens,
    onRemoveCategory,
    onRemoveAuthor,
    onRemoveMeatType,
    onRemoveSideType,
    onRemoveAllergen,
}) => {
    const hasFilters =
        selectedCategories.length > 0 ||
        selectedAuthors.length > 0 ||
        selectedMeatTypes.length > 0 ||
        selectedSideTypes.length > 0 ||
        (isExcludeAllergens && selectedAllergens.length > 0);

    if (!hasFilters) {
        return null;
    }

    return (
        <Flex wrap='wrap' mb={{ base: 4, md: 6 }} w='100%' rowGap={2} columnGap={4}>
            {selectedCategories.map((item) => (
                <FilterTag
                    key={`cat-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={onRemoveCategory}
                />
            ))}
            {selectedAuthors.map((item) => (
                <FilterTag
                    key={`auth-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={onRemoveAuthor}
                />
            ))}
            {selectedMeatTypes.map((item) => (
                <FilterTag
                    key={`meat-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={onRemoveMeatType}
                />
            ))}
            {selectedSideTypes.map((item) => (
                <FilterTag
                    key={`side-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={onRemoveSideType}
                />
            ))}
            {isExcludeAllergens &&
                selectedAllergens.map((item) => (
                    <FilterTag
                        key={`allergen-${item.value}`}
                        label={item.label}
                        value={item.value}
                        onRemove={onRemoveAllergen}
                    />
                ))}
        </Flex>
    );
};
