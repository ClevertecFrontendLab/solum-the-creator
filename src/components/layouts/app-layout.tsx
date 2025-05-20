import { Outlet } from 'react-router';

import { GlobalLoader } from '~/components/shared/misc/global-loader/global-loader';
import { useClearNotificationsOnRouteChange } from '~/hooks/use-clear-notifications-on-route-change';

export const AppLayout = () => {
    useClearNotificationsOnRouteChange();

    return (
        <>
            <GlobalLoader />
            <Outlet />
        </>
    );
};
