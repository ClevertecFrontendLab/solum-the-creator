import { Accordion } from '@chakra-ui/react';

import { useActiveCategoryIndex } from '~/hooks/use-active-category-index';
import { selectSidebarCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

import { CategoryItem } from './category-item';

export const SidebarNavigation: React.FC = () => {
    const categories = useAppSelector(selectSidebarCategories);

    const { activeIndex: defaultIndex, pathname } = useActiveCategoryIndex(categories);

    return (
        <Accordion as='nav' py={2.5} pl={2.5} pr={1} index={defaultIndex} variant='sidebar'>
            {categories.map((category) => (
                <CategoryItem key={category._id} category={category} pathname={pathname} />
            ))}
        </Accordion>
    );
};
