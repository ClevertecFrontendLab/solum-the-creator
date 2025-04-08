import { Navigate, useParams } from 'react-router';

import { subcategoriesMap } from '~/constants/categories';
import { pathes } from '~/constants/pathes';

export const RedirectToFirstSubcategory = () => {
    const { category } = useParams();

    const firstSubcategory = subcategoriesMap[category!][0].alias;

    if (!firstSubcategory) {
        return <Navigate to={pathes.home} replace />;
    }

    return <Navigate to={firstSubcategory} replace />;
};
