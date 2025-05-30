import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { HeroSection } from '~/components/sections/hero-section/hero-section';
import { CulinaryBlogsSection } from '~/components/sections/home/culinary-blogs-section';
import { JuiciestSection } from '~/components/sections/home/juiciest-section';
import { NewRecipesSection } from '~/components/sections/new-recipes-section/new-recipes-section';
import { RecipeHorizontalGridSection } from '~/components/sections/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/sections/relevant-kitchen-section/relevant-kitchen-section';
import { fadeIn } from '~/constants/motions/motion-presets';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

export const HomePage = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {
        cachedRecipes,
        isFilterApplied,
        isFetchingNextPage,
        isFetching,
        hasNextPage,
        fetchNextPage,
    } = useFilteredRecipes();

    const isEmptyResult = isFilterApplied && !cachedRecipes?.length;
    const isSuccessResult = !!(isFilterApplied && cachedRecipes);

    const shouldShowRecipes = isFilterApplied && cachedRecipes && cachedRecipes.length > 0;

    useEffect(() => {
        if (location.state?.showSuccessDraftNotification) {
            dispatch(addNotification({ type: 'success', title: 'Черновик успешно сохранен' }));

            window.history.replaceState(
                { ...location.state, showSuccessDraftNotification: false },
                '',
            );
        }

        if (location.state?.showSuccessDeleteRecipeNotification) {
            dispatch(addNotification({ type: 'success', title: 'Рецепт успешно удален' }));

            window.history.replaceState(
                { ...location.state, showSuccessDeleteRecipeNotification: false },
                '',
            );
        }
    }, [location, dispatch]);

    return (
        <Flex direction='column' align='center'>
            <Box pb={{ base: 0, xl: 6 }} width='100%' px={{ base: 0, sm: 5, md: 6 }}>
                <HeroSection
                    title='Приятного аппетита!'
                    isLoading={isFetching}
                    isEmptyResult={isEmptyResult}
                    isSuccessResult={isSuccessResult}
                />
            </Box>

            <AnimatePresence mode='wait'>
                {shouldShowRecipes ? (
                    <motion.div key='filtered' {...fadeIn}>
                        <Box px={{ base: 4, sm: 5, md: 6 }}>
                            <RecipeHorizontalGridSection
                                recipes={cachedRecipes}
                                isLoading={isFetchingNextPage}
                                hasNextPage={hasNextPage}
                                onClickMore={fetchNextPage}
                            />
                        </Box>
                    </motion.div>
                ) : (
                    <Flex
                        direction='column'
                        align='center'
                        width='100%'
                        px={{ base: 4, sm: 5, md: 6 }}
                    >
                        <NewRecipesSection />
                        <JuiciestSection />
                        <CulinaryBlogsSection />
                        <RelevantKitchenSection />
                    </Flex>
                )}
            </AnimatePresence>
        </Flex>
    );
};
