import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { resetFilters } from '~/store/allergen-filter/slice';
import { useAppDispatch } from '~/store/hooks';

export const useResetAllergenFilter = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetFilters());
    }, [location.pathname, dispatch]);
};
