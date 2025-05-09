import { Box } from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router';

import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { Loader } from '~/components/shared/misc/loader/loader';
import { pathes } from '~/constants/navigation/pathes';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetRecipesByCategoryIdPaginatedInfiniteQuery } from '~/query/services/recipe';
import { selectSubcategoryBySlug } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const SubcategoryPage = () => {
    const { subcategory: subcategorySlug } = useParams<{
        subcategory: string;
    }>();

    const categoryId = useAppSelector(selectSubcategoryBySlug(subcategorySlug!))?._id as string;

    const { data, isLoading, hasNextPage, isFetchingNextPage, isFetching, fetchNextPage, isError } =
        useGetRecipesByCategoryIdPaginatedInfiniteQuery({
            perPage: 8,
            categoryId,
        });

    useGlobalLoading(isLoading);

    if (isError) {
        return <Navigate to={pathes.notFound} replace />;
    }

    const recipes = data?.pages.flat() ?? [];

    const handleClickMore = () => fetchNextPage();

    return isFetching ? (
        <Box py={4}>
            <Loader isVisible={true} />
        </Box>
    ) : (
        <RecipeHorizontalGridSection
            recipes={recipes}
            hasNextPage={hasNextPage}
            onClickMore={handleClickMore}
            isLoading={isFetchingNextPage}
        />
    );
};
