import { Box, Image } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';

type ImageSectionProps = {
    image: string;
    category: string;
    categoryTitle: string;
};

export const ImageSection: React.FC<ImageSectionProps> = ({ image, categoryTitle, category }) => (
    <Box position='relative'>
        <Image
            src={image}
            alt='Recipe image'
            w='100%'
            h={{ base: '8rem', md: '14.375rem' }}
            objectFit='cover'
        />

        <Box
            position='absolute'
            top={2}
            left={2}
            zIndex={1}
            display={{ base: 'inline-flex', md: 'none' }}
        >
            <CategoryBadge title={categoryTitle} category={category} />
        </Box>
    </Box>
);
