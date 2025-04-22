import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { recipes } from '~/constants/data/recipes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';

export const SubcategoryPage = () => {
    const filteredRecipes = useFilteredRecipes(recipes);

    return <RecipeHorizontalGridSection recipes={filteredRecipes} />;
};
