import { useEffect, useRef } from 'react';

import { useAppDispatch } from '~/store/hooks';
import { endLoading, startLoading } from '~/store/loader/slice';

export const useGlobalLoading = (isLoading: boolean) => {
    const dispatch = useAppDispatch();
    const startedRef = useRef(false);

    useEffect(() => {
        if (isLoading && !startedRef.current) {
            dispatch(startLoading());
            startedRef.current = true;
        }

        if (!isLoading && startedRef.current) {
            dispatch(endLoading());
            startedRef.current = false;
        }
    }, [isLoading, dispatch]);

    useEffect(
        () => () => {
            if (startedRef.current) {
                dispatch(endLoading());
                startedRef.current = false;
            }
        },
        [dispatch],
    );
};
