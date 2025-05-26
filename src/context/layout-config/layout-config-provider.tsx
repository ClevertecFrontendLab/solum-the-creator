import { useState } from 'react';

import { LayoutConfigContext } from './layout-config-context';

export const LayoutConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [showRightSidebar, setShowRightSidebar] = useState(true);

    return (
        <LayoutConfigContext.Provider value={{ showRightSidebar, setShowRightSidebar }}>
            {children}
        </LayoutConfigContext.Provider>
    );
};
