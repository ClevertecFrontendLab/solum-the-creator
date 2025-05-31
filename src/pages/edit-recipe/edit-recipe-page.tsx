import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router';

import { NewRecipeForm } from '~/components/ui/forms/new-recipe-form/new-recipe-form';
import { useLayoutConfig } from '~/context/layout-config/use-layout-config';
import { Recipe, recipeApiSlice } from '~/query/services/recipe/recipe';
import { store } from '~/store/configure-store';

export const EditRecipePageLoader: LoaderFunction = async ({ params }) => {
    const { recipeId } = params;
    const result = await store.dispatch(recipeApiSlice.endpoints.getRecipeById.initiate(recipeId!));

    if (result.error) {
        throw new Response('Failed to fetch recipe', { status: 500 });
    }

    return result.data;
};

export const HydrateEditRecipePage: React.FC = () => null;

export const EditRecipePage = () => {
    const { setShowRightSidebar } = useLayoutConfig();
    const recipe = useLoaderData<Recipe>();

    useEffect(() => {
        setShowRightSidebar(false);

        return () => {
            setShowRightSidebar(true);
        };
    }, [setShowRightSidebar]);

    return (
        <Box
            pt={{ base: '1rem', md: '3.5rem' }}
            pb={{ base: '1rem', sm: '2.75rem', md: '2rem' }}
            pl={{ base: 4, sm: 5, md: 6 }}
            pr={{ base: 4, sm: 5, md: 0 }}
        >
            <NewRecipeForm mode='edit' recipe={recipe} />
        </Box>
    );
};
