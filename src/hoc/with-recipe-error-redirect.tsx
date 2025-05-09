import { JSX, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';

export function withRecipeErrorRedirect<T extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<T>,
) {
    return (props: T) => {
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            const from = (location.state as { from?: string })?.from;
            navigate(from || pathes.home, { replace: true });
        }, [navigate, location.state]);

        return <Component {...props} />;
    };
}
