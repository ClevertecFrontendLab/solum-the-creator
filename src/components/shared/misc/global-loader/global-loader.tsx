import { Loader } from '~/components/shared/misc/loader/loader';
import { useAppSelector } from '~/store/hooks';
import { selectIsGlobalLoading } from '~/store/loader/selectors';

export const GlobalLoader: React.FC = () => {
    const isLoading = useAppSelector(selectIsGlobalLoading);

    return <Loader variant='fullscreen' size='lg' isVisible={isLoading} />;
};
