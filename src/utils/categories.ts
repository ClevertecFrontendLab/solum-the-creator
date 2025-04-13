import { categoryIcons, CategoryKey } from '~/constants/category-icons';
import { RouteNode, routeTree } from '~/constants/route-tree';

export const getCategories = (routeTree: RouteNode[]) =>
    routeTree.filter((route) => route.type === 'category');

export const getSubcategoryPath = (categoryPath: string, subPath: string) =>
    `${categoryPath}/${subPath}`;

export const isCategoryActive = (categoryPath: string, currentPath: string) =>
    currentPath === categoryPath || currentPath.startsWith(`${categoryPath}/`);

export const getCategoryNameByKey = (key: CategoryKey): string | undefined => {
    const node = routeTree.find((node) => node.path === key);
    return node?.name;
};

export const isCategoryKey = (key: string): key is CategoryKey => key in categoryIcons;
