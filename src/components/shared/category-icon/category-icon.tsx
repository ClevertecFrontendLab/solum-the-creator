import { Image } from '@chakra-ui/react';

import { categoryIcons, CategoryKey } from '~/constants/category-icons';
import { getCategoryNameByKey } from '~/utils/categories';

type CategoryIconProps = {
    category: CategoryKey;
    boxSize?: number;
};

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, boxSize = 4 }) => {
    const categoryIcon = categoryIcons[category];
    const categoryName = getCategoryNameByKey(category);

    return <Image src={categoryIcon} alt={categoryName} boxSize={boxSize} />;
};
