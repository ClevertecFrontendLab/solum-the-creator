import { isFiltersEmpty } from '~/utils/filters';

import { ApplicationState } from '../configure-store';

export const selectMeatFilter = (state: ApplicationState) => state.recipesFilters.draftFilters.meat;
export const selectGarnishFilter = (state: ApplicationState) =>
    state.recipesFilters.draftFilters.garnish;
export const selectSubcategoriesIdsFilter = (state: ApplicationState) =>
    state.recipesFilters.draftFilters.subcategoriesIds;
export const selectAllergensFilter = (state: ApplicationState) =>
    state.recipesFilters.draftFilters.allergens;
export const selectExcludeAllergensFilter = (state: ApplicationState) =>
    state.recipesFilters.draftFilters.excludeAllergens;
export const selectSearchStringFilter = (state: ApplicationState) =>
    state.recipesFilters.draftFilters.searchString;
export const selectRecipesFilters = (state: ApplicationState) => state.recipesFilters.draftFilters;
export const selectIsFilterApplied = (state: ApplicationState) =>
    !isFiltersEmpty(state.recipesFilters.appliedFilters);

export const selectAppliedFilters = (state: ApplicationState) =>
    state.recipesFilters.appliedFilters;
