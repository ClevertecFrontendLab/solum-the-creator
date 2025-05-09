import { Box, Button, Grid } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components/cards/recipe-card-horizontal/recipe-card-horizontal';
import { Loader } from '~/components/shared/misc/loader/loader';
import { Recipe } from '~/query/services/recipe';

type RecipeHorizontalGridSectionProps = {
    recipes: Recipe[];
    onClickMore?: () => void;
    hasNextPage?: boolean;
    isLoading?: boolean;
};

export const RecipeHorizontalGridSection: React.FC<RecipeHorizontalGridSectionProps> = ({
    recipes,
    onClickMore,
    hasNextPage,
    isLoading = false,
}) => (
    <Box as='section' width='100%'>
        <Grid
            templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                md: '1fr',
                '2xl': 'repeat(2, 1fr)',
            }}
            w='100%'
            columnGap={{ base: 4, '2xl': 6 }}
            rowGap={4}
        >
            {recipes.map((recipe, index) => (
                <RecipeCardHorizontal
                    key={recipe._id}
                    id={recipe._id}
                    index={index}
                    title={recipe.title}
                    image={recipe.image}
                    bookmarks={recipe.bookmarks}
                    likes={recipe.likes}
                    categoriesIds={recipe.categoriesIds}
                    description={recipe.description}
                    dataTestId={`food-card-${index}`}
                />
            ))}
        </Grid>

        <Box my={10} textAlign='center'>
            <Loader isVisible={isLoading} />
        </Box>

        {hasNextPage && (
            <Box mt={4} textAlign='center'>
                <Button
                    variant='brand'
                    size='md'
                    onClick={onClickMore}
                    disabled={isLoading}
                    data-test-id='load-more-button'
                >
                    {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
                </Button>
            </Box>
        )}
    </Box>
);
