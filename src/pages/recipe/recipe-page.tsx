import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

import { RecipeAuthorCard } from '~/components/cards/recipe-author-card/recipe-author-card';
import { NewRecipesSection } from '~/components/sections/new-recipes-section/new-recipes-section';
import { HeaderSection } from '~/components/sections/recipe/header-section/header-section';
import { NutritionSection } from '~/components/sections/recipe/nutrition-section/nutrition-section';
import { RecipeStepsSection } from '~/components/sections/recipe/recipe-steps-section/recipe-steps-section';
import { RecipeTableSection } from '~/components/sections/recipe/recipe-table-section/recipe-table-section';
import { authors } from '~/constants/data/authors';
import { pathes } from '~/constants/navigation/pathes';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetRecipeByIdQuery } from '~/query/services/recipe';
import { clearCurrentRecipe } from '~/store/current-recipe/slice';
import { useAppDispatch } from '~/store/hooks';

const mockAuthor = authors[0];

export const RecipePage = () => {
    const { recipeId } = useParams<{ recipeId: string }>();
    const dispatch = useAppDispatch();

    const { data: recipe, isLoading, isError } = useGetRecipeByIdQuery(recipeId!);
    useGlobalLoading(isLoading);

    useEffect(
        () => () => {
            dispatch(clearCurrentRecipe());
        },
        [dispatch],
    );

    if (isError) {
        return <Navigate to={pathes.notFound} replace />;
    }

    if (!recipe) {
        return null;
    }

    return (
        <VStack spacing={{ base: 6, md: 10 }} px={{ base: 4, sm: 5, md: 6 }}>
            <HeaderSection
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
                categoriesIds={recipe.categoriesIds}
                time={recipe.time}
                bookmarks={recipe.bookmarks}
                likes={recipe.likes}
            />

            <NutritionSection {...recipe.nutritionValue} />

            <VStack
                width='100%'
                maxW={{ base: '37.75rem', md: '36.125rem', '2xl': '41.75rem' }}
                spacing={{ base: 6, md: 10 }}
            >
                <RecipeTableSection ingredients={recipe.ingredients} portions={recipe.portions} />
                <RecipeStepsSection steps={recipe.steps} />

                <RecipeAuthorCard
                    fullName={mockAuthor.fullName}
                    userName={mockAuthor.userName}
                    avatarUrl={mockAuthor.avatarUrl}
                    followers={mockAuthor.followers}
                />
            </VStack>

            <NewRecipesSection />
        </VStack>
    );
};
