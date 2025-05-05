import { useEffect, useRef } from 'react';
import { useNavigation } from 'react-router';

import { Loader } from '~/components/shared/misc/loader/loader';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectIsGlobalLoading } from '~/store/loader/selectors';
import { endLoading, startLoading } from '~/store/loader/slice';

export const GlobalLoader: React.FC = () => {
    const dispatch = useAppDispatch();
    const isGlobalLoading = useAppSelector(selectIsGlobalLoading);
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    const prev = useRef(false);

    useEffect(() => {
        if (!prev.current && isLoading) dispatch(startLoading());
        if (prev.current && !isLoading) dispatch(endLoading());
        prev.current = isLoading;
    }, [isLoading, dispatch]);

    return <Loader variant='fullscreen' size='lg' isVisible={isGlobalLoading} />;
};
