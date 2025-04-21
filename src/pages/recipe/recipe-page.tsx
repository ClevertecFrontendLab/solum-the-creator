import { VStack } from '@chakra-ui/react';

import { HeaderSection } from '~/components/features/recipe/header-section/header-section';
import { NutritionSection } from '~/components/features/recipe/nutrition-section/nutrition-section';
import { RecipeStepsSection } from '~/components/features/recipe/recipe-steps-section/recipe-steps-section';
import { RecipeTableSection } from '~/components/features/recipe/recipe-table-section/recipe-table-section';
import { RecipeAuthorCard } from '~/components/shared/cards/recipe-author-card/recipe-author-card';
import { authors } from '~/constants/data/authors';
import { recipes } from '~/constants/data/recipes';

const mockRecipe = recipes[1];
const mockAuthor = authors[0];

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

        <VStack
            width='100%'
            maxW={{ base: '37.75rem', md: '36.125rem', '2xl': '41.75rem' }}
            spacing={{ base: 6, md: 10 }}
        >
            <RecipeTableSection
                ingredients={mockRecipe.ingredients}
                portions={mockRecipe.portions}
            />
            <RecipeStepsSection steps={mockRecipe.steps} />

            <RecipeAuthorCard
                fullName={mockAuthor.fullName}
                userName={mockAuthor.userName}
                avatarUrl={mockAuthor.avatarUrl}
                followers={mockAuthor.followers}
            />
        </VStack>
    </VStack>
);
