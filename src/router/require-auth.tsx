import { Navigate, Outlet } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { selectAccessToken } from '~/store/auth/selectors';
import { useAppSelector } from '~/store/hooks';

export const RequireAuth = () => {
    const accessToken = useAppSelector(selectAccessToken);

    if (!accessToken) {
        return <Navigate to={pathes.login} replace />;
    }

    return <Outlet />;
};
