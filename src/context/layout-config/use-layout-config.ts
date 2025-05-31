import { useContext } from 'react';

import { LayoutConfigContext } from './layout-config-context';

export const useLayoutConfig = () => {
    const context = useContext(LayoutConfigContext);
    if (context === undefined) {
        throw new Error('useLayoutConfig must be used within a LayoutConfigProvider');
    }
    return context;
};
