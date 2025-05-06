import { FilterParams } from '~/store/recipes-filters/slice';

export const isFiltersEmpty = (filters: FilterParams): boolean =>
    !filters.searchString &&
    filters.meat.length === 0 &&
    filters.garnish.length === 0 &&
    filters.subcategoriesIds.length === 0 &&
    (!filters.excludeAllergens || filters.allergens.length === 0);
