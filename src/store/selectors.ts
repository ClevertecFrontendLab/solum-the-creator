import { ApplicationState } from './configure-store';
import { selectIsAllergensSelected } from './recipes-filters/selectors';

export const selectIsHeroActive = (state: ApplicationState) => {
    const searchQuery = state.recipesFilters.draftFilters.searchString;
    const hasSearchQuery = searchQuery.length > 0;
    const hasAllergenFilter = selectIsAllergensSelected(state);

    return hasSearchQuery || hasAllergenFilter;
};
