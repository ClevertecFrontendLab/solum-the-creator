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

export const selectIsFilterActive = (state: ApplicationState) =>
    state.recipesFilters.isFilterActive && !isFiltersEmpty(state.recipesFilters.draftFilters);

export const selectAppliedFilters = (state: ApplicationState) =>
    state.recipesFilters.appliedFilters;

export const selectAppliedAllergensFilter = (state: ApplicationState) =>
    state.recipesFilters.appliedFilters.allergens;

export const selectIsAllergensSelected = (state: ApplicationState) =>
    state.recipesFilters.appliedFilters.allergens.length > 0 &&
    state.recipesFilters.appliedFilters.excludeAllergens;

export const selectAppliedExcludeAllergensFilter = (state: ApplicationState) =>
    state.recipesFilters.appliedFilters.excludeAllergens;

export const selectAppliedFilterVersion = (state: ApplicationState) =>
    state.recipesFilters.appliedFilterVersion;
