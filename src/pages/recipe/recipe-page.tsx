import { VStack } from '@chakra-ui/react';

import { HeaderSection } from '~/components/features/recipe/header-section/header-section';
import { NutritionSection } from '~/components/features/recipe/nutrition-section/nutrition-section';
import { recipes } from '~/constants/data/recipes';

const mockRecipe = recipes[2];

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
    </VStack>
);
