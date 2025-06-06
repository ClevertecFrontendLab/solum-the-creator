import { useMemo } from 'react';
import { useLocation, useMatches } from 'react-router';

import { getRecipeFromUrlRegexp } from '~/constants/data/regexp';
import { staticPaths } from '~/constants/navigation/pathes';
import { Breadcrumb } from '~/constants/navigation/route-tree';
import { selectSidebarCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';
import { Recipe } from '~/types/recipe';

export const useBreadcrumbs = (): Breadcrumb[] => {
    const location = useLocation();
    const matches = useMatches();
    const categories = useAppSelector(selectSidebarCategories);

    const recipe = useMemo(() => {
        const recipeMatch = matches.find((m) => getRecipeFromUrlRegexp.test(m.pathname || ''));

        return recipeMatch?.data as Recipe | undefined;
    }, [matches]);

    return useMemo(() => {
        const segments = location.pathname.split('/').filter(Boolean);
        const crumbs: Breadcrumb[] = [];

        crumbs.push({ label: staticPaths[0].label, href: staticPaths[0].path });

        let currentPath = '';

        if (segments[0] === 'edit-recipe') {
            crumbs.push({ label: 'Редактировать рецепт', href: location.pathname });
            return crumbs;
        }

        segments.forEach((seg, idx) => {
            if (idx === 0) {
                const sp = staticPaths.find((p) => p.path === `/${seg}`);
                if (sp) {
                    currentPath = `/${seg}`;
                    crumbs.push({ label: sp.label, href: currentPath });
                    return;
                }
            }

            if (idx === 0) {
                const cat = categories.find((c) => c.category === seg);
                if (cat) {
                    currentPath = `/${seg}`;
                    crumbs.push({ label: cat.title, href: currentPath });
                    return;
                }
            }

            if (idx === 1) {
                const catSeg = segments[0];
                const cat = categories.find((c) => c.category === catSeg);
                if (cat) {
                    const sub = cat.subCategories.find((s) => s.category === seg);
                    if (sub) {
                        currentPath = `${currentPath}/${seg}`;
                        crumbs.push({ label: sub.title, href: currentPath });
                        return;
                    }
                }
            }

            if (idx === 2 && recipe) {
                currentPath = `${currentPath}/${seg}`;
                crumbs.push({ label: recipe.title, href: currentPath });
                return;
            }

            currentPath = `${currentPath}/${seg}`;
            crumbs.push({ label: seg, href: currentPath });
        });

        return crumbs;
    }, [location.pathname, categories, recipe]);
};
