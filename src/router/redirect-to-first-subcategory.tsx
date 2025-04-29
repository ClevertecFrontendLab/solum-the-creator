import { Navigate, useParams } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { selectSidebarCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const RedirectToFirstSubcategory = () => {
    const { category } = useParams<{ category: string }>();
    const categories = useAppSelector(selectSidebarCategories);

    const firstSubcategoryPath = categories.find((cat) => cat.category === category)
        ?.subCategories[0].category;

    if (!firstSubcategoryPath) {
        return <Navigate to={pathes.home} replace />;
    }

    return <Navigate to={firstSubcategoryPath} replace />;
};
