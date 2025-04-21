import { Heading, VStack } from '@chakra-ui/react';

import { RecipeStepCard } from '~/components/shared/cards/recipe-step-card/recipe-step-card';
import { RecipeStep } from '~/constants/data/recipes';

type RecipeStepsSectionProps = {
    steps: RecipeStep[];
};

export const RecipeStepsSection: React.FC<RecipeStepsSectionProps> = ({ steps }) => (
    <VStack as='section' w='100%' spacing={5} align='stretch'>
        <Heading as='h2' textAlign='left' fontWeight='500' fontSize={{ base: '2xl', md: '5xl' }}>
            Шаги приготовления
        </Heading>
        {steps.map((step) => (
            <RecipeStepCard
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                description={step.description}
                image={step.image}
                isLastStep={step.stepNumber === steps.length}
            />
        ))}
    </VStack>
);
