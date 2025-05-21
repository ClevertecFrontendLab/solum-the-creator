import { Navigate, Outlet } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useCheckAuthQuery } from '~/query/services/auth';
import { selectAccessToken } from '~/store/auth/selectors';
import { useAppSelector } from '~/store/hooks';

export const RequireGuest = () => {
    const accessToken = useAppSelector(selectAccessToken);

    const { isLoading, isSuccess } = useCheckAuthQuery(undefined, {
        skip: !!accessToken,
    });

    if (isLoading) {
        return null;
    }

    if (accessToken || isSuccess) {
        return <Navigate to={pathes.home} replace />;
    }

    return <Outlet />;
};
