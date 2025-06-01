import { Ingredient } from '~/types/recipe';

export const calculatePortions = (
    ingridient: Ingredient,
    currentPortions: number,
    initialPortions: number,
) => {
    const baseCount = Number(ingridient.count);

    if (isNaN(baseCount)) {
        return ingridient.count;
    }

    const portionCount = (baseCount * currentPortions) / initialPortions;
    return portionCount % 1 === 0 ? portionCount.toString() : portionCount.toFixed(2);
};
