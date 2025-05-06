import { initialAllergens } from '~/constants/data/allergens';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectAllergensFilter } from '~/store/recipes-filters/selectors';
import { setAllergensFilter } from '~/store/recipes-filters/slice';
import { mergeOptionsWithValues } from '~/utils/allergens';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type AllergenSelectProps = {
    isDisabled?: boolean;
    dataTestId?: string;
};

export const AllergenSelect: React.FC<AllergenSelectProps> = ({ isDisabled, dataTestId }) => {
    const dispatch = useAppDispatch();
    const selectedAllergens = useAppSelector(selectAllergensFilter);

    const allAllergenOptions = mergeOptionsWithValues(selectedAllergens, initialAllergens);

    const selectedAllergensOptions = allAllergenOptions.filter((opt) =>
        selectedAllergens.includes(opt.value),
    );

    const handleChange = (selected: Option[]) => {
        const selectedAllergens = selected.map((opt) => opt.value);
        dispatch(setAllergensFilter(selectedAllergens));
    };

    return (
        <MultiSelectMenu
            options={allAllergenOptions}
            selected={selectedAllergensOptions}
            onChange={handleChange}
            allowCustomInput={true}
            isDisabled={isDisabled}
            dataTestId={dataTestId}
            placeholder='Выберите из списка аллергенов...'
            getOptionTestId={(_, idx) => `allergen-${idx}`}
            menuListDataTestId='allergens-menu'
        />
    );
};
