import { RecipeFormData } from '~/components/ui/forms/new-recipe-form/recipe-schema';
import { Recipe } from '~/query/services/recipe';

export const mapRecipeToFormData = (recipe: Recipe): RecipeFormData => ({
    title: recipe.title,
    image: recipe.image,
    description: recipe.description,
    categoriesIds: recipe.categoriesIds,
    time: recipe.time,
    ingredients: recipe.ingredients,
    portions: recipe.portions,
    steps: recipe.steps.map(({ stepNumber, ...rest }) => rest),
});
