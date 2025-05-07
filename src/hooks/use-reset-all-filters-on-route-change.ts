import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useAppDispatch } from '~/store/hooks';
import { resetFilters } from '~/store/recipes-filters/slice';

export const useResetAllFiltersOnRouteChange = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetFilters());
    }, [location.pathname, dispatch]);
};
