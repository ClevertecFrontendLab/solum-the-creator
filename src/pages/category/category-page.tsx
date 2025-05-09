import { Flex } from '@chakra-ui/react';
import { Navigate, Outlet, useParams } from 'react-router';

import { HeroSection } from '~/components/sections/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/sections/relevant-kitchen-section/relevant-kitchen-section';
import { CategoryTabs } from '~/components/shared/navigation/category-tabs/category-tabs';
import { pathes } from '~/constants/navigation/pathes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { selectCategoryBySlug } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const CategoryPage = () => {
    const { category: categorySlug } = useParams<{ category: string }>();

    const category = useAppSelector(selectCategoryBySlug(categorySlug!));
    const subcategoriesIds = category?.subCategories.map((s) => s._id) ?? [];

    const {
        cachedRecipes,
        isFilterApplied,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useFilteredRecipes({ subcategoriesIds });

    const isEmptyResult = isFilterApplied && !cachedRecipes?.length;
    const isSuccessResult = !!(isFilterApplied && cachedRecipes);
    const shouldShowRecipes = isFilterApplied && cachedRecipes && cachedRecipes.length > 0;

    if (!category) {
        return <Navigate to={pathes.notFound} replace />;
    }

    return (
        <Flex direction='column' align='center'>
            <HeroSection
                title={category.title}
                description={category.description}
                isEmptyResult={isEmptyResult}
                isLoading={isFetching}
                isSuccessResult={isSuccessResult}
            />
            <Flex
                direction='column'
                align='center'
                width='100%'
                pt={4}
                px={{ base: 4, sm: 5, md: 6 }}
            >
                {shouldShowRecipes ? (
                    <RecipeHorizontalGridSection
                        recipes={cachedRecipes}
                        isLoading={isFetchingNextPage}
                        hasNextPage={hasNextPage}
                        onClickMore={fetchNextPage}
                    />
                ) : (
                    <>
                        <CategoryTabs />

                        <Outlet />
                    </>
                )}

                <RelevantKitchenSection currentCategoryId={category._id} />
            </Flex>
        </Flex>
    );
};
