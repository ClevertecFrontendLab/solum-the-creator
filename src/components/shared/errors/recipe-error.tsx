import { withRecipeErrorRedirect } from '~/hoc/with-recipe-error-redirect';

const FallbackComponent = () => null;

export const RecipeError = withRecipeErrorRedirect(FallbackComponent);
