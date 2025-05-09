import { useEffect, useRef } from 'react';

export const useScrollToTab = (index: number) => {
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
    }, [index]);

    return tabRefs;
};
