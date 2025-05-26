import { createContext } from 'react';

type LayoutConfig = {
    showRightSidebar: boolean;
    setShowRightSidebar: (showRightSidebar: boolean) => void;
};

export const LayoutConfigContext = createContext<LayoutConfig | undefined>(undefined);
