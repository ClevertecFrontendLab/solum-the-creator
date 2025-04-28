import { selectIsAllergenFilterActive } from './allergen-filter/selectors';
import { ApplicationState } from './configure-store';

export const selectIsHeroActive = (state: ApplicationState) => {
    const searchQuery = state.search.query;
    const hasSearchQuery = searchQuery.length > 0;
    const hasAllergenFilter = selectIsAllergenFilterActive(state);

    return hasSearchQuery || hasAllergenFilter;
};
