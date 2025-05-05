import { Box, Image, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { RecommendBadge } from '~/components/shared/badges/recommend-badge/recommend-badge';
import { Category } from '~/types/category';

type ImageSectionProps = {
    image: string;
    categories: Category[];
    recommendedBy?: { avatarUrl: string; fullName: string };
};

export const ImageSection: React.FC<ImageSectionProps> = ({ image, categories, recommendedBy }) => (
    <Box
        position='relative'
        w='100%'
        maxW={{ base: '10rem', lg: '21.625rem' }}
        minW={{ base: '9.875rem', lg: '14.375rem' }}
        h='100%'
    >
        <Image src={image} alt='Recipe image' w='100%' h='100%' objectFit='cover' />

        <Box
            position='absolute'
            top={2}
            left={2}
            zIndex={1}
            display={{ base: 'inline-flex', lg: 'none' }}
        >
            <VStack align='start'>
                {categories.map(({ _id, title, category }) => (
                    <CategoryBadge key={_id} title={title} category={category} bgColor='lime.50' />
                ))}
            </VStack>
        </Box>

        {recommendedBy && (
            <Box
                position='absolute'
                bottom={5}
                left={6}
                zIndex={1}
                display={{ base: 'none', lg: 'inline-flex' }}
            >
                <RecommendBadge
                    avatarUrl={recommendedBy.avatarUrl}
                    fullName={recommendedBy.fullName}
                />
            </Box>
        )}
    </Box>
);
