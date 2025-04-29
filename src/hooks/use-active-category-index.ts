import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { SidebarCategory } from '~/types/category';
import { isCategoryActive } from '~/utils/categories';

export const useActiveCategoryIndex = (categories: SidebarCategory[]) => {
    const location = useLocation();
    const pathname = location.pathname.slice(1);

    const activeIndex = useMemo(
        () =>
            categories
                .map((c, i) => (isCategoryActive(c.category, pathname) ? i : -1))
                .filter((i) => i !== -1),
        [categories, pathname],
    );

    return {
        activeIndex,
        pathname,
    };
};
