import { recipes } from '~/constants/data/recipes';
import { Breadcrumb, RouteNode } from '~/constants/navigation/route-tree';

export const findRoute = (
    nodes: RouteNode[],
    segments: string[],
    currentPath: string = '',
): Breadcrumb[] => {
    if (segments.length === 0) {
        return [];
    }

    const [segment, ...rest] = segments;
    const node = nodes.find((n) => n.path === segment);

    if (node) {
        const path = `${currentPath}/${node.path}`;
        return [{ label: node.name, href: path }, ...findRoute(node.children ?? [], rest, path)];
    }

    const recipe = recipes.find((r) => r.id === segment);
    if (recipe) {
        const path = `${currentPath}/${segment}`;
        return [{ label: recipe.title, href: path }];
    }

    return [
        { label: segment, href: `${currentPath}/${segment}` },
        ...findRoute([], rest, `${currentPath}/${segment}`),
    ];
};
