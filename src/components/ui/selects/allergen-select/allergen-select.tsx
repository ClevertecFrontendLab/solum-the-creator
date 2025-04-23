import { initialAllergens } from '~/constants/data/allergens';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type AllergenSelectProps = {
    selectedAllergens: Option[];
    onChange: (selected: Option[]) => void;
    isDisabled?: boolean;
};

export const AllergenSelect: React.FC<AllergenSelectProps> = ({
    selectedAllergens,
    onChange,
    isDisabled,
}) => (
    <MultiSelectMenu
        options={initialAllergens}
        selected={selectedAllergens}
        onChange={onChange}
        allowCustomInput={true}
        isDisabled={isDisabled}
    />
);
