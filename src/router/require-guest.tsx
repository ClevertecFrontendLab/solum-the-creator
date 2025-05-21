import { Navigate, Outlet } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { selectAccessToken } from '~/store/auth/selectors';
import { useAppSelector } from '~/store/hooks';

export const RequireGuest = () => {
    const accessToken = useAppSelector(selectAccessToken);

    if (accessToken) {
        return <Navigate to={pathes.home} replace />;
    }

    return <Outlet />;
};
