import { Route, Routes } from 'react-router';

import { MainLayout } from '~/components/layouts/main-layout';
import { pathes } from '~/constants/navigation/pathes';
import { CategoryPage } from '~/pages/category/category-page';
import { SubcategoryPage } from '~/pages/category/subcategory/subcategory-page';
import { HomePage } from '~/pages/home-page';
import { JuiciestPage } from '~/pages/juiciest-page';
import { NotFoundPage } from '~/pages/not-found/not-found-page';
import { RecipePage } from '~/pages/recipe/recipe-page';

import { RedirectToFirstSubcategory } from './redirect-to-first-subcategory';

export const AppRoutes = () => (
    <Routes>
        <Route path={pathes.home} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={pathes.juiciest} element={<JuiciestPage />} />

            <Route path={pathes.categories} element={<CategoryPage />}>
                <Route index element={<RedirectToFirstSubcategory />} />
                <Route path={pathes.subcategories} element={<SubcategoryPage />} />
            </Route>

            <Route path={pathes.recipes} element={<RecipePage />} />

            <Route path={pathes.notFound} element={<NotFoundPage />} />
        </Route>
    </Routes>
);
