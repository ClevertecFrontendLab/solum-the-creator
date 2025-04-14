import { Box, Button, Grid } from '@chakra-ui/react';

import { Recipe } from '~/constants/recipes';

import { RecipeCardHorizontal } from '../cards/recipe-card/recipe-card-horizontal';

type RecipeHorizontalGridSectionProps = {
    recipes: Recipe[];
};

export const RecipeHorizontalGridSection: React.FC<RecipeHorizontalGridSectionProps> = ({
    recipes,
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
                <RecipeCardHorizontal key={index} {...recipe} />
            ))}
        </Grid>

        <Box mt={4} textAlign='center'>
            <Button variant='brand' size='md'>
                Загрузить ещё
            </Button>
        </Box>
    </Box>
);
