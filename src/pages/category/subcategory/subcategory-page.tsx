import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { recipes } from '~/constants/data/recipes';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';
import { useCategoryFilteredRecipes } from '~/hooks/use-category-filtered-recipes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { useSearchedRecipes } from '~/hooks/use-serched-recipes';
import { useAppSelector } from '~/store/hooks';
import { selectIsDrawerFilterApplied } from '~/store/recipe-filter/selectors';

export const SubcategoryPage = () => {
    const categoryFilteredRecipes = useCategoryFilteredRecipes(recipes);

    const filteredAllergenRecipes = useAllergenFilteredRecipes(categoryFilteredRecipes);

    const isDrawerFilterApplied = useAppSelector(selectIsDrawerFilterApplied);
    const filteredRecipes = useFilteredRecipes(categoryFilteredRecipes);

    const filteredRicipesByUI = isDrawerFilterApplied ? filteredRecipes : filteredAllergenRecipes;

    const { recipes: finalRecipes } = useSearchedRecipes(filteredRicipesByUI);

    return <RecipeHorizontalGridSection recipes={finalRecipes} />;
};
