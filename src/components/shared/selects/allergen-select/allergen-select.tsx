import { initialAllergens } from '~/constants/data/allergens';
import { mergeOptionsWithValues } from '~/utils/allergens';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type AllergenSelectProps = {
    selectedAllergens: string[];
    onChange: (selected: string[]) => void;
    isDisabled?: boolean;
    dataTestId?: string;
};

export const AllergenSelect: React.FC<AllergenSelectProps> = ({
    selectedAllergens,
    onChange,
    isDisabled,
    dataTestId,
}) => {
    const allAllergenOptions = mergeOptionsWithValues(selectedAllergens, initialAllergens);

    const selectedAllergensOptions = allAllergenOptions.filter((opt) =>
        selectedAllergens.includes(opt.value),
    );

    const handleChange = (selected: Option[]) => onChange(selected.map((opt) => opt.value));

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
