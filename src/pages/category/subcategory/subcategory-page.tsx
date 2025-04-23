import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { recipes } from '~/constants/data/recipes';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';

export const SubcategoryPage = () => {
    const categoryFilteredRecipes = useFilteredRecipes(recipes);
    const filteredRecipes = useAllergenFilteredRecipes(categoryFilteredRecipes);

    return <RecipeHorizontalGridSection recipes={filteredRecipes} />;
};
