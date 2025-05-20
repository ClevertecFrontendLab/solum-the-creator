import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useAppDispatch } from '~/store/hooks';
import { clearNotifications } from '~/store/notification/slice';

export const useClearNotificationsOnRouteChange = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(clearNotifications());
    }, [location.pathname, dispatch]);
};
