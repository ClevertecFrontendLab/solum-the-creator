import { VStack } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { RecipeAuthorCard } from '~/components/cards/recipe-author-card/recipe-author-card';
import { NewRecipesSection } from '~/components/sections/new-recipes-section/new-recipes-section';
import { HeaderSection } from '~/components/sections/recipe/header-section/header-section';
import { NutritionSection } from '~/components/sections/recipe/nutrition-section/nutrition-section';
import { RecipeStepsSection } from '~/components/sections/recipe/recipe-steps-section/recipe-steps-section';
import { RecipeTableSection } from '~/components/sections/recipe/recipe-table-section/recipe-table-section';
import { authors } from '~/constants/data/authors';
import { recipes } from '~/constants/data/recipes';

const mockAuthor = authors[0];

export const RecipePage = () => {
    const { recipeId } = useParams<{ recipeId: string }>();

    const recipe = recipes.find((r) => r.id === recipeId);

    if (!recipe) {
        return null;
    }

    return (
        <VStack spacing={{ base: 6, md: 10 }} px={{ base: 4, sm: 5, md: 6 }}>
            <HeaderSection
                title={recipe.title}
                image={recipe.image}
                category={recipe.category}
                description={recipe.description}
                time={recipe.time}
                bookmarks={recipe.bookmarks}
                likes={recipe.likes}
            />

            <NutritionSection {...recipe.nutritionValue} />

            <VStack
                width='100%'
                maxW={{ base: '37.75rem', md: '36.125rem', '2xl': '41.75rem' }}
                spacing={{ base: 6, md: 10 }}
            >
                <RecipeTableSection ingredients={recipe.ingredients} portions={recipe.portions} />
                <RecipeStepsSection steps={recipe.steps} />

                <RecipeAuthorCard
                    fullName={mockAuthor.fullName}
                    userName={mockAuthor.userName}
                    avatarUrl={mockAuthor.avatarUrl}
                    followers={mockAuthor.followers}
                />
            </VStack>

            <NewRecipesSection />
        </VStack>
    );
};
