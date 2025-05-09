import { Box, Image, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { Category } from '~/types/category';

type ImageSectionProps = {
    image: string;
    categories: Category[];
};

export const ImageSection: React.FC<ImageSectionProps> = ({ image, categories }) => (
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
            <VStack>
                {categories.map(({ _id, title, category }) => (
                    <CategoryBadge key={_id} title={title} category={category} />
                ))}
            </VStack>
        </Box>
    </Box>
);
