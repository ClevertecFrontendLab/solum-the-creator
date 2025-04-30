import { Image } from '@chakra-ui/react';

import { selectCategoryBySlug } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

type CategoryIconProps = {
    category: string;
    boxSize?: number;
};

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, boxSize = 4 }) => {
    const categoryItem = useAppSelector(selectCategoryBySlug(category));

    const categoryIcon = categoryItem?.icon;
    const categoryName = categoryItem?.title;

    return <Image src={categoryIcon} alt={categoryName} boxSize={boxSize} />;
};
