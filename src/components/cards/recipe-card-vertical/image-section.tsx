import { Box, Image } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { CategoryKey } from '~/constants/ui/category-icons';

type ImageSectionProps = {
    image: string;
    category?: CategoryKey;
};

export const ImageSection: React.FC<ImageSectionProps> = ({ image, category }) => (
    <Box position='relative'>
        <Image
            src={image}
            alt='Recipe image'
            w='100%'
            h={{ base: '8rem', md: '14.375rem' }}
            objectFit='cover'
        />

        {category && (
            <Box
                position='absolute'
                top={2}
                left={2}
                zIndex={1}
                display={{ base: 'inline-flex', md: 'none' }}
            >
                <CategoryBadge category={category} />
            </Box>
        )}
    </Box>
);
