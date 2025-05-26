import { useEffect } from 'react';

import { useLayoutConfig } from '~/context/layout-config/use-layout-config';

export const NewRecipePage = () => {
    const { setShowRightSidebar } = useLayoutConfig();

    useEffect(() => {
        setShowRightSidebar(false);

        return () => {
            setShowRightSidebar(true);
        };
    }, [setShowRightSidebar]);

    return (
        <div>
            <h1>new recipe</h1>
        </div>
    );
};
