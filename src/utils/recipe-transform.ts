import {
    RecipeDraftFormData,
    RecipeFormData,
} from '~/components/ui/forms/new-recipe-form/recipe-schema';
import { Recipe } from '~/query/services/recipe/recipe';

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

export const normalizeDraft = (data: RecipeFormData): RecipeDraftFormData => ({
    ...data,
    description: data.description?.trim() || undefined,
    image: data.image?.trim() || undefined,
    time: data.time || undefined,
    portions: data.portions || undefined,
    categoriesIds: data.categoriesIds?.length ? data.categoriesIds : undefined,
    ingredients:
        data.ingredients
            ?.filter((i) => i.title.trim())
            .map((i) => ({
                ...i,
                title: i.title.trim(),
                measureUnit: i.measureUnit?.trim() || undefined,
                count: i.count || undefined,
            })) || undefined,
    steps:
        data.steps
            ?.filter((s) => s.description.trim() || s.image)
            .map((s, i) => ({
                ...s,
                description: s.description?.trim() || undefined,
                stepNumber: s.stepNumber ?? i + 1,
            })) || undefined,
});
