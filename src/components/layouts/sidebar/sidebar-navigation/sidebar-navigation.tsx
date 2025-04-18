import { Accordion } from '@chakra-ui/react';

import { routeTree } from '~/constants/route-tree';
import { useActiveCategoryIndex } from '~/hooks/use-active-category-index';
import { getCategories } from '~/utils/categories';

import { CategoryItem } from './category-item';

export const SidebarNavigation: React.FC = () => {
    const categories = getCategories(routeTree);

    const { activeIndex: defaultIndex, pathname } = useActiveCategoryIndex(categories);

    return (
        <Accordion
            as='nav'
            py='10px'
            pr='4px'
            pl='10px'
            defaultIndex={defaultIndex}
            variant='sidebar'
        >
            {categories.map((category) => (
                <CategoryItem key={category.path} category={category} pathname={pathname} />
            ))}
        </Accordion>
    );
};
