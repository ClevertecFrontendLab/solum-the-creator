import { Badge, Box, HStack, Image } from '@chakra-ui/react';

import { categoryIcons, CategoryKey } from '~/constants/category-icons';
import { getCategoryNameByKey } from '~/utils/categories';

type CategoryBadgeProps = {
    category: CategoryKey;
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
    const categoryIcon = categoryIcons[category];
    const categoryName = getCategoryNameByKey(category);

    return (
        <Badge variant='brand' display='inline-flex' alignItems='center'>
            <HStack spacing={{ base: 1, md: 2 }}>
                <Image src={categoryIcon} alt={categoryName} boxSize={4} />
                <Box as='span'>{categoryName}</Box>
            </HStack>
        </Badge>
    );
};
