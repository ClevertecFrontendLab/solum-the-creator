import { Grid, Text, VStack } from '@chakra-ui/react';

import { NutritionItem } from './nutrition-item';

type NutritionSectionProps = {
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
};

export const NutritionSection: React.FC<NutritionSectionProps> = ({
    calories,
    protein,
    fats,
    carbohydrates,
}) => (
    <VStack w='100%' maxW={{ base: '100%', md: '36.125rem', '2xl': '41.75rem' }}>
        <Text w='100%' textAlign='left' fontSize='sm' color='blackAlpha.800'>
            * Калорийность на 1 порцию
        </Text>
        <Grid
            w='100%'
            templateColumns={{
                base: '1fr',
                sm: 'repeat(4, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 3, '2xl': 6 }}
        >
            <NutritionItem type='calories' value={calories || 0} />
            <NutritionItem type='protein' value={protein || 0} />
            <NutritionItem type='fats' value={fats || 0} />
            <NutritionItem type='carbohydrates' value={carbohydrates || 0} />
        </Grid>
    </VStack>
);
