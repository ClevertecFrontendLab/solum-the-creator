import { ApplicationState } from '../configure-store';

export const selectExcludeMode = (state: ApplicationState) => state.allergenFilter.excludeMode;
export const selectSelectedAllergens = (state: ApplicationState) =>
    state.allergenFilter.selectedAllergens;

export const selectIsAllergenFilterActive = (state: ApplicationState) =>
    state.allergenFilter.excludeMode && state.allergenFilter.selectedAllergens.length > 0;
