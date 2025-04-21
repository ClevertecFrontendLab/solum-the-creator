import { VStack } from '@chakra-ui/react';

import { HeaderSection } from '~/components/features/recipe/header-section/header-section';
import { NutritionSection } from '~/components/features/recipe/nutrition-section/nutrition-section';
import { RecipeTableSection } from '~/components/features/recipe/recipe-table-section/recipe-table-section';
import { recipes } from '~/constants/data/recipes';

const mockRecipe = recipes[1];

export const RecipePage = () => (
    <VStack spacing={{ base: 6, md: 10 }}>
        <HeaderSection
            title={mockRecipe.title}
            image={mockRecipe.image}
            category={mockRecipe.category}
            description={mockRecipe.description}
            time={mockRecipe.time}
            bookmarks={mockRecipe.bookmarks}
            likes={mockRecipe.likes}
        />

        <NutritionSection {...mockRecipe.nutritionValue} />

        <VStack width='100%' maxW={{ base: '37.75rem', md: '36.125rem', '2xl': '41.75rem' }}>
            <RecipeTableSection
                ingredients={mockRecipe.ingredients}
                portions={mockRecipe.portions}
            />
        </VStack>
    </VStack>
);
