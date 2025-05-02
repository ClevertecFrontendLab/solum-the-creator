import { ApplicationState } from '../configure-store';

export const selectCurrentRecipe = (state: ApplicationState) => state.currentRecipe.recipe;
