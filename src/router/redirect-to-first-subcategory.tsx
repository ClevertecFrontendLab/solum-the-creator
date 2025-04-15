import { Navigate, useParams } from 'react-router';

import { pathes } from '~/constants/pathes';
import { getFirstSubcategoryPath } from '~/utils/get-first-subcategory';

export const RedirectToFirstSubcategory = () => {
    const { category } = useParams();

    const firstSubcategoryPath = getFirstSubcategoryPath(category!);

    if (!firstSubcategoryPath) {
        return <Navigate to={pathes.home} replace />;
    }

    return <Navigate to={firstSubcategoryPath} replace />;
};
