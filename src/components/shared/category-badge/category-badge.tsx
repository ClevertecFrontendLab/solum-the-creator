import { Badge, Box, HStack } from '@chakra-ui/react';

import { CategoryKey } from '~/constants/ui/category-icons';
import { getCategoryNameByKey } from '~/utils/categories';

import { CategoryIcon } from '../category-icon/category-icon';

type CategoryBadgeProps = {
    category: CategoryKey;
    bgColor?: string;
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, bgColor = 'lime.200' }) => {
    const categoryName = getCategoryNameByKey(category);

    return (
        <Badge variant='brand' display='inline-flex' bgColor={bgColor} alignItems='center'>
            <HStack spacing={{ base: 1, md: 2 }}>
                <CategoryIcon category={category} boxSize={4} />
                <Box as='span'>{categoryName}</Box>
            </HStack>
        </Badge>
    );
};
