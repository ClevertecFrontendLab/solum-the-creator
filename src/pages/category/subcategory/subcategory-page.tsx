import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { recipes } from '~/constants/data/recipes';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';
import { useCategoryFilteredRecipes } from '~/hooks/use-category-filtered-recipes';

export const SubcategoryPage = () => {
    const categoryFilteredRecipes = useCategoryFilteredRecipes(recipes);
    const filteredRecipes = useAllergenFilteredRecipes(categoryFilteredRecipes);

    return <RecipeHorizontalGridSection recipes={filteredRecipes} />;
};
