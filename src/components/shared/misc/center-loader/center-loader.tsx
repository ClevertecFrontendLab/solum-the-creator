import { Center } from '@chakra-ui/react';

import { Loader } from '../loader/loader';

type CenterLoaderProps = {
    isLoading: boolean;
};

export const CenterLoader: React.FC<CenterLoaderProps> = ({ isLoading }) => (
    <Center p={4}>
        <Loader isVisible={isLoading} />
    </Center>
);
