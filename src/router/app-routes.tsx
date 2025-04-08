import { Route, Routes } from 'react-router';

import { pathes } from '~/constants/pathes';
import { CategoryPage } from '~/pages/category/category-page';
import { SubcategoryPage } from '~/pages/category/subcategory/subcategory-page';
import { HomePage } from '~/pages/home-page';
import { JuiciestPage } from '~/pages/juiciest-page';

import { RedirectToFirstSubcategory } from './redirect-to-first-subcategory';

const AppRoutes = () => (
    <Routes>
        <Route path={pathes.home} element={<HomePage />} />
        <Route path={pathes.juiciest} element={<JuiciestPage />} />

        <Route path={pathes.categories} element={<CategoryPage />}>
            <Route index element={<RedirectToFirstSubcategory />} />
            <Route path={pathes.subcategories} element={<SubcategoryPage />} />
        </Route>
    </Routes>
);

export default AppRoutes;
