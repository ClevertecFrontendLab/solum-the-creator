import { Navigate, Outlet } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useCheckAuthQuery } from '~/query/services/auth';

export const RequireGuest = () => {
    const { isLoading, isSuccess } = useCheckAuthQuery();

    if (isLoading) return null;
    return isSuccess ? <Navigate to={pathes.home} replace /> : <Outlet />;
};
