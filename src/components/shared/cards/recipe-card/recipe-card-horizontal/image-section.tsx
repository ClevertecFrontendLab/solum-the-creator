import { Box, Image } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/widgets/category-badge/category-badge';
import { RecommendBadge } from '~/components/widgets/recommend-badge/recommend-badge';
import { CategoryKey } from '~/constants/ui/category-icons';

type ImageSectionProps = {
    image: string;
    category?: CategoryKey;
    recommendedBy?: { avatarUrl: string; fullName: string };
};

export const ImageSection: React.FC<ImageSectionProps> = ({ image, category, recommendedBy }) => (
    <Box
        position='relative'
        w='100%'
        maxW={{ base: '10rem', lg: '21.625rem' }}
        minW={{ base: '9.875rem', lg: '14.375rem' }}
    >
        <Image src={image} alt='Recipe image' w='100%' h='100%' objectFit='cover' />

        {category && (
            <Box
                position='absolute'
                top={2}
                left={2}
                zIndex={1}
                display={{ base: 'inline-flex', lg: 'none' }}
            >
                <CategoryBadge category={category} bgColor='lime.50' />
            </Box>
        )}

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
