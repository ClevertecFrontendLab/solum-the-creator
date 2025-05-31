import { Flex, Text } from '@chakra-ui/react';

type NutritionSectionProps = {
    type: 'calories' | 'protein' | 'fats' | 'carbohydrates';
    value: number;
};

const labels = {
    calories: 'калорийность',
    protein: 'белки',
    fats: 'жиры',
    carbohydrates: 'углеводы',
};

export const NutritionItem: React.FC<NutritionSectionProps> = ({ type, value }) => {
    const label = labels[type];
    const measurement = type === 'calories' ? 'ККАЛ' : 'ГРАММ';
    return (
        <Flex
            direction={{ base: 'row', sm: 'column' }}
            align='center'
            gap={{ base: 3, '2xl': 6 }}
            px={{ base: 3, sm: 4 }}
            py={4}
            w='100%'
            h='100%'
            justify={{ base: 'space-between', sm: 'center' }}
            textAlign='center'
            border='1px solid'
            borderColor='blackAlpha.200'
            rounded='2xl'
        >
            <Text
                as='span'
                color='blackAlpha.600'
                fontSize='sm'
                lineHeight='143%'
                flex={{ base: '2', sm: 'unset' }}
                textAlign={{ base: 'left', sm: 'center' }}
            >
                {label}
            </Text>
            <Text
                as='span'
                color='lime.800'
                fontSize={{ base: '2xl', sm: '4xl' }}
                lineHeight={{ base: '133%', sm: '111%' }}
                fontWeight='500'
                flex={{ base: '2', sm: 'unset' }}
            >
                {value}
            </Text>
            <Text
                as='span'
                color='blackAlpha.900'
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight='600'
                lineHeight='143%'
                flex={{ base: '1', sm: 'unset' }}
                textAlign={{ base: 'left', sm: 'center' }}
            >
                {measurement}
            </Text>
        </Flex>
    );
};
