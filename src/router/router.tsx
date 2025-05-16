import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router';

import { AppLayout } from '~/components/layouts/app-layout';
import { AuthLayout } from '~/components/layouts/auth-layout';
import { MainLayout } from '~/components/layouts/main-layout';
import { RecipeError } from '~/components/shared/errors/recipe-error';
import { pathes } from '~/constants/navigation/pathes';
import { LoginPage } from '~/pages/auth/login-page';
import { SignUpPage } from '~/pages/auth/sign-up-page';
import { CategoryPage } from '~/pages/category/category-page';
import { SubcategoryPage } from '~/pages/category/subcategory/subcategory-page';
import { HomePage } from '~/pages/home-page';
import { JuiciestPage } from '~/pages/juiciest-page';
import { NotFoundPage } from '~/pages/not-found/not-found-page';
import { HydrateRecipePage, RecipePage, RecipePageLoader } from '~/pages/recipe/recipe-page';

import { RedirectToFirstSubcategory } from './redirect-to-first-subcategory';
import { RequireAuth } from './require-auth';
import { RequireGuest } from './require-guest';
import { VerificationHandler } from './verification-handler';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route element={<RequireAuth />}>
                <Route path={pathes.home} element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={pathes.juiciest} element={<JuiciestPage />} />

                    <Route path={pathes.categories} element={<CategoryPage />}>
                        <Route index element={<RedirectToFirstSubcategory />} />
                        <Route path={pathes.subcategories} element={<SubcategoryPage />} />
                    </Route>

                    <Route
                        path={pathes.recipes}
                        element={<RecipePage />}
                        loader={RecipePageLoader}
                        HydrateFallback={HydrateRecipePage}
                        errorElement={<RecipeError />}
                    />

                    <Route path={pathes.notFound} element={<NotFoundPage />} />
                    <Route path='*' element={<Navigate to={pathes.notFound} replace />} />
                </Route>
            </Route>

            <Route element={<RequireGuest />}>
                <Route element={<AuthLayout />}>
                    <Route path={pathes.login} element={<LoginPage />} />
                    <Route path={pathes.signUp} element={<SignUpPage />} />
                </Route>
                <Route path={pathes.verification} element={<VerificationHandler />} />
            </Route>
        </Route>,
    ),
);
