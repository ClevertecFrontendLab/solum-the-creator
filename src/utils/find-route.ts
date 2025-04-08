import { Breadcrumb, RouteNode } from '~/constants/breadcrumbs';

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

    if (!node) {
        return [
            { label: segment, href: `${currentPath}/${segment}` },
            ...findRoute([], rest, `${currentPath}/${segment}`),
        ];
    }

    const path = `${currentPath}/${node.path}`;

    return [{ label: node.name, href: path }, ...findRoute(node.children ?? [], rest, path)];
};
