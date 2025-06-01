import { VStack } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { LoaderFunction, useLocation, useParams } from 'react-router';

import { RecipeAuthorCard } from '~/components/cards/recipe-author-card/recipe-author-card';
import { NewRecipesSection } from '~/components/sections/new-recipes-section/new-recipes-section';
import { HeaderSection } from '~/components/sections/recipe/header-section/header-section';
import { NutritionSection } from '~/components/sections/recipe/nutrition-section/nutrition-section';
import { RecipeStepsSection } from '~/components/sections/recipe/recipe-steps-section/recipe-steps-section';
import { RecipeTableSection } from '~/components/sections/recipe/recipe-table-section/recipe-table-section';
import { authors } from '~/constants/data/authors';
import { recipeApiQuaries, useGetRecipeByIdQuery } from '~/query/services/recipe/slices/quaries';
import { selectUserId } from '~/store/auth/selectors';
import { store } from '~/store/configure-store';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

const mockAuthor = authors[0];

export const RecipePageLoader: LoaderFunction = async ({ params }) => {
    const { recipeId } = params;

    if (!recipeId) return null;

    const result = await store.dispatch(
        recipeApiQuaries.endpoints.getRecipeById.initiate(recipeId),
    );

    if (result.error) {
        throw new Response('Failed to fetch recipe', { status: 500 });
    }

    return result.data;
};

export const HydrateRecipePage: React.FC = () => null;

export const RecipePage = () => {
    const { recipeId } = useParams<{ recipeId: string }>();
    const currentUserId = useAppSelector(selectUserId);

    const { data: recipe } = useGetRecipeByIdQuery(recipeId ?? skipToken, {
        refetchOnMountOrArgChange: false,
    });

    const isAuthor = recipe?.authorId === currentUserId;

    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (location.state?.showSuccessNotification) {
            dispatch(addNotification({ type: 'success', title: 'Рецепт успешно опубликован' }));

            window.history.replaceState({ ...location.state, showSuccessNotification: false }, '');
        }
    }, [location, dispatch]);

    if (!recipe || !recipeId) return null;

    return (
        <VStack spacing={{ base: 6, md: 10 }} px={{ base: 4, sm: 5, md: 6 }}>
            <HeaderSection
                recipeId={recipeId}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
                categoriesIds={recipe.categoriesIds}
                time={recipe.time}
                bookmarks={recipe.bookmarks}
                likes={recipe.likes}
                isAuthor={isAuthor}
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
