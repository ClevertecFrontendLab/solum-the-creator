import { Badge, Box, HStack } from '@chakra-ui/react';

import { CategoryIcon } from '../../category-icon/category-icon';

type CategoryBadgeProps = {
    category: string;
    title: string;
    bgColor?: string;
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
    category,
    title,
    bgColor = 'lime.200',
}) => (
    <Badge variant='brand' display='inline-flex' bgColor={bgColor} alignItems='center' w='auto'>
        <HStack spacing={{ base: 1, md: 2 }} w='100%'>
            <CategoryIcon category={category} boxSize={4} />
            <Box as='span' noOfLines={1} wordBreak='break-all' w='100%' display='inline'>
                {title}
            </Box>
        </HStack>
    </Badge>
);
