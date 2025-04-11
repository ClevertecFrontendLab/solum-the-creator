import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { RouteNode } from '~/constants/route-tree';
import { isCategoryActive } from '~/utils/categories';

export const useActiveCategoryIndex = (categories: RouteNode[]) => {
    const location = useLocation();
    const pathname = location.pathname.slice(1);

    const activeIndex = useMemo(
        () =>
            categories
                .map((c, i) => (isCategoryActive(c.path, pathname) ? i : -1))
                .filter((i) => i !== -1),
        [categories, pathname],
    );

    return {
        activeIndex,
        pathname,
    };
};
