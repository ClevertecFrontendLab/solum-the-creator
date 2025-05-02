import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/sections/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/sections/relevant-kitchen-section/relevant-kitchen-section';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetJuiciestRecipesPaginatedInfiniteQuery } from '~/query/services/recipe';

export const JuiciestPage = () => {
    const limit = 8;
    const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
        useGetJuiciestRecipesPaginatedInfiniteQuery({ perPage: limit });

    useGlobalLoading(isLoading);

    const recipes = data?.pages.flat() ?? [];

    // const filteredAllergenRecipes = useAllergenFilteredRecipes(popularRecipes);

    // const isDrawerFilterApplied = useAppSelector(selectIsDrawerFilterApplied);
    // const filteredRecipes = useFilteredRecipes(popularRecipes);

    // const filteredRicipesByUI = isDrawerFilterApplied ? filteredRecipes : filteredAllergenRecipes;

    // const { recipes: finalRecipes } = useSearchedRecipes(filteredRicipesByUI);

    const handleClickMore = () => fetchNextPage();

    return (
        <Flex direction='column' align='center'>
            <HeroSection title='Самое сочное' />

            <Flex direction='column' align='center' width='100%' px={{ base: 4, sm: 5, md: 6 }}>
                {recipes && (
                    <RecipeHorizontalGridSection
                        recipes={recipes}
                        onClickMore={handleClickMore}
                        hasNextPage={hasNextPage}
                        isLoading={isFetching}
                    />
                )}

                <RelevantKitchenSection />
            </Flex>
        </Flex>
    );
};
