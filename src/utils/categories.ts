import { RouteNode } from '~/constants/route-tree';

export const getCategories = (routeTree: RouteNode[]) =>
    routeTree.filter((route) => route.type === 'category');

export const getSubcategoryPath = (categoryPath: string, subPath: string) =>
    `${categoryPath}/${subPath}`;

export const isCategoryActive = (categoryPath: string, currentPath: string) =>
    currentPath === categoryPath || currentPath.startsWith(`${categoryPath}/`);
