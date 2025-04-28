import { initialAllergens } from '~/constants/data/allergens';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type AllergenSelectProps = {
    selectedAllergens: Option[];
    onChange: (selected: Option[]) => void;
    isDisabled?: boolean;
    dataTestId?: string;
};

export const AllergenSelect: React.FC<AllergenSelectProps> = ({
    selectedAllergens,
    onChange,
    isDisabled,
    dataTestId,
}) => (
    <MultiSelectMenu
        options={initialAllergens}
        selected={selectedAllergens}
        onChange={onChange}
        allowCustomInput={true}
        isDisabled={isDisabled}
        dataTestId={dataTestId}
        placeholder='Выберите из списка аллергенов...'
        getOptionTestId={(_, idx) => `allergen-${idx}`}
        menuListDataTestId='allergens-menu'
    />
);
