import { useEffect, useRef } from 'react';

import { useAppDispatch } from '~/store/hooks';
import { endLoading, startLoading } from '~/store/loader/slice';

export const useGlobalLoading = (isLoading: boolean) => {
    const dispatch = useAppDispatch();

    const prev = useRef(false);

    useEffect(() => {
        if (!prev.current && isLoading) {
            dispatch(startLoading());
        }

        if (prev.current && !isLoading) {
            dispatch(endLoading());
        }
        prev.current = isLoading;
    }, [dispatch, isLoading]);
};
