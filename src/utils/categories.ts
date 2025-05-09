import { matchPath } from 'react-router';

import { categories } from '~/constants/data/category';
import { RouteNode, routeTree } from '~/constants/navigation/route-tree';
import { categoryIcons, CategoryKey } from '~/constants/ui/category-icons';
import { RawCategory, RawItem } from '~/query/services/category';
import { Category, SidebarCategory, SubCategory } from '~/types/category';

import { getImgUrl } from './image';

export const getSubcategoryPath = (categoryPath: string, subPath: string) =>
    `${categoryPath}/${subPath}`;

export const isCategoryActive = (categoryPath: string, currentPath: string) =>
    currentPath === categoryPath || currentPath.startsWith(`${categoryPath}/`);

export const getCategoryNameByKey = (key: CategoryKey): string | undefined => {
    const node = routeTree.find((node) => node.path === key);
    return node?.name;
};

export const getCurrentCategory = (category?: string): RouteNode | undefined =>
    routeTree.find((node) => node.path === category && node.type === 'category');

export const isCategoryKey = (key: string): key is CategoryKey => key in categoryIcons;

export const getActiveSubcategoryIndex = (
    category: SidebarCategory,
    subcategories: SubCategory[],
    pathname: string,
) =>
    subcategories.findIndex((child) => {
        const pathPattern = `/${concatPath(category.category, child.category)}/*`;

        const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;

        const isMatch = matchPath({ path: pathPattern, end: false }, normalizedPathname);

        return isMatch !== null;
    });

export const findMatchingSubcategory = (
    categoryPath: CategoryKey,
    recipeSubcategories: string[],
) => {
    const categoryNode = routeTree.find(
        (node) => node.type === 'category' && node.path === categoryPath,
    );

    if (!categoryNode?.children) {
        return undefined;
    }

    return categoryNode.children.find((child) => recipeSubcategories.includes(child.path))?.path;
};

export const getCategiresOptions = () =>
    Object.entries(categories).map(([key, { label }]) => ({
        value: key,
        label,
    }));

export const concatPath = (...paths: string[]) => paths.filter(Boolean).join('/');

export const transformCategories = (raw: RawItem[]): Category[] => {
    const roots = raw.filter((item): item is RawCategory => item.rootCategoryId === undefined);

    return roots.map((item) => ({
        ...item,
        icon: getImgUrl(item.icon),
    }));
};
