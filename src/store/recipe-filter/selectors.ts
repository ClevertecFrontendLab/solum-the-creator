import { ApplicationState } from '../configure-store';

export const selectIsDrawerFilterApplied = (state: ApplicationState): boolean => {
    const { categories, allergens, authors, excludeAllergens, meatTypes, sideTypes } =
        state.recipeFilter;

    return (
        categories.length > 0 ||
        authors.length > 0 ||
        meatTypes.length > 0 ||
        sideTypes.length > 0 ||
        (excludeAllergens && allergens.length > 0)
    );
};
