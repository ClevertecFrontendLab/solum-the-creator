import { RouteNode, routeTree } from '~/constants/navigation/route-tree';
import { categoryIcons, CategoryKey } from '~/constants/ui/category-icons';

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

export const getCurrentCategory = (category?: string): RouteNode | undefined =>
    routeTree.find((node) => node.path === category && node.type === 'category');

export const isCategoryKey = (key: string): key is CategoryKey => key in categoryIcons;

export const getActiveSubcategoryIndex = (
    category: RouteNode,
    subcategories: RouteNode[],
    pathname: string,
) =>
    subcategories.findIndex((child) => {
        const subPath = getSubcategoryPath(category.path, child.path);
        return subPath === pathname;
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
