import { Outlet } from 'react-router';

import { GlobalLoader } from '~/components/shared/misc/global-loader/global-loader';

export const AppLayout = () => (
    <>
        <GlobalLoader />
        <Outlet />
    </>
);
