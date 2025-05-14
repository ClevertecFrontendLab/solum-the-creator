import { Navigate, Outlet } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useCheckAuthQuery } from '~/query/services/auth';

export const RequireAuth = () => {
    const { isLoading, isSuccess, isError } = useCheckAuthQuery();

    if (isLoading) return null;
    if (isError) return <Navigate to={pathes.login} replace />;

    return isSuccess ? <Outlet /> : null;
};
