import { VStack } from '@chakra-ui/react';

import { HeaderSection } from '~/components/features/recipe/header-section/header-section';
import { recipes } from '~/constants/data/recipes';

const mockRecipe = recipes[2];

export const RecipePage = () => (
    <VStack>
        <HeaderSection
            title={mockRecipe.title}
            image={mockRecipe.image}
            category={mockRecipe.category}
            description={mockRecipe.description}
            time={mockRecipe.time}
            bookmarks={mockRecipe.bookmarks}
            likes={mockRecipe.likes}
        />
    </VStack>
);
