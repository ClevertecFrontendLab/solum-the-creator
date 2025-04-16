import { useEffect, useRef } from 'react';

import { RouteNode } from '~/constants/navigation/route-tree';

export const useScrollToTab = (index: number, children: RouteNode[]) => {
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const selectedTab = tabRefs.current[index === -1 ? 0 : index];
        if (selectedTab) {
            selectedTab.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [index, children]);

    return tabRefs;
};
