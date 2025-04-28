import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { resetFilters } from '~/store/allergen-filter/slice';
import { useAppDispatch } from '~/store/hooks';
import { clearFilters } from '~/store/recipe-filter/slice';
import { clearSearchQuery } from '~/store/search/slice';

export const useResetAllFiltersOnRouteChange = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetFilters());
        dispatch(clearFilters());
        dispatch(clearSearchQuery());
    }, [location.pathname, dispatch]);
};
