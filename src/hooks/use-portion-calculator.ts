import { useCallback, useState } from 'react';

import { Ingredient } from '~/constants/data/recipes';
import { calculatePortions } from '~/utils/calculate-portions';

export const usePortionCalculator = (initialPortions: number) => {
    const [currentPortions, setCurrentPortions] = useState(initialPortions);

    const calculate = useCallback(
        (ingridient: Ingredient) => calculatePortions(ingridient, currentPortions, initialPortions),
        [currentPortions, initialPortions],
    );

    return { currentPortions, setCurrentPortions, calculatePortion: calculate };
};
