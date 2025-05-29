import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useLayoutConfig } from '~/context/layout-config/use-layout-config';

export const EditRecipePage = () => {
    const { setShowRightSidebar } = useLayoutConfig();

    useEffect(() => {
        setShowRightSidebar(false);

        return () => {
            setShowRightSidebar(true);
        };
    }, [setShowRightSidebar]);

    return (
        <Box
            pt={{ base: '1rem', md: '3.5rem' }}
            pb={{ base: '1rem', sm: '2.75rem', md: '2rem' }}
            pl={{ base: 4, sm: 5, md: 6 }}
            pr={{ base: 4, sm: 5, md: 0 }}
        >
            Edit Form
        </Box>
    );
};
