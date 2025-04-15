import { routeTree } from '~/constants/navigation/route-tree';

export const getFirstSubcategoryPath = (category: string): string | null => {
    const categoryNode = routeTree.find(
        (node) => node.path === category && node.type === 'category',
    );

    const firstChild = categoryNode?.children?.[0];

    return firstChild ? `/${category}/${firstChild.path}` : null;
};
