import { Accordion } from '@chakra-ui/react';

import { routeTree } from '~/constants/route-tree';
import { useActiveCategoryIndex } from '~/hooks/use-active-category-index';
import { getCategories } from '~/utils/categories';

import { CategoryItem } from './category-item';

export const SidebarNavigation: React.FC = () => {
    const categories = getCategories(routeTree);

    const { activeIndex: defaultIndex, pathname } = useActiveCategoryIndex(categories);

    return (
        <Accordion as='nav' py='10px' pl='10px' pr='16px' defaultIndex={defaultIndex}>
            {categories.map((category) => (
                <CategoryItem key={category.path} category={category} pathname={pathname} />
            ))}
        </Accordion>
    );
};
