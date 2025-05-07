import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/sections/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/sections/relevant-kitchen-section/relevant-kitchen-section';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetJuiciestRecipesPaginatedInfiniteQuery } from '~/query/services/recipe';

export const JuiciestPage = () => {
    const limit = 8;

    const {
        cachedRecipes,
        isFilterApplied,
        isFetchingNextPage: isFetchingFilteredNextPage,
        isFetching: isFetchingFiltered,
        hasNextPage: hasMoreFiltered,
        fetchNextPage: fetchNextFiltered,
    } = useFilteredRecipes({ sortBy: 'likes', sortOrder: 'desc' });

    const {
        data: juicyData,
        isLoading: isJuicyLoading,
        isFetchingNextPage: isFetchingJuicyNextPage,
        fetchNextPage: fetchNextJuicy,
        hasNextPage: hasMoreJuicy,
    } = useGetJuiciestRecipesPaginatedInfiniteQuery(
        { perPage: limit },
        {
            skip: isFilterApplied,
        },
    );

    useGlobalLoading(isJuicyLoading);

    const juicyRecipes = juicyData?.pages.flat() ?? [];

    const isEmptyResult = isFilterApplied && cachedRecipes?.length === 0;
    const shouldShowFiltered = isFilterApplied && cachedRecipes && cachedRecipes.length > 0;

    const recipeProps = shouldShowFiltered
        ? {
              recipes: cachedRecipes,
              onClickMore: fetchNextFiltered,
              hasNextPage: hasMoreFiltered,
              isLoading: isFetchingFilteredNextPage,
          }
        : {
              recipes: juicyRecipes,
              onClickMore: fetchNextJuicy,
              hasNextPage: hasMoreJuicy,
              isLoading: isFetchingJuicyNextPage,
          };

    return (
        <Flex direction='column' align='center'>
            <HeroSection
                title='Самое сочное'
                isLoading={isFetchingFiltered}
                isEmptyResult={isEmptyResult}
            />

            <Flex direction='column' align='center' width='100%' px={{ base: 4, sm: 5, md: 6 }}>
                <RecipeHorizontalGridSection {...recipeProps} />

                <RelevantKitchenSection />
            </Flex>
        </Flex>
    );
};
