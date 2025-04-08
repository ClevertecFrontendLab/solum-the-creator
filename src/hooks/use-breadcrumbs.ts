import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { routeTree } from '~/constants/breadcrumbs';
import { findRoute } from '~/utils/find-route';

export const useBreadcrumbs = () => {
    const location = useLocation();

    const crumbs = useMemo(() => {
        const segments = location.pathname.split('/').filter(Boolean);
        return findRoute(routeTree, segments);
    }, [location]);

    const homeCrumb = routeTree[0]
        ? { label: routeTree[0].name, href: routeTree[0].path || '/' }
        : null;

    return homeCrumb ? [homeCrumb, ...crumbs] : crumbs;
};
