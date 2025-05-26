import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import { NewRecipeForm } from '~/components/ui/forms/new-recipe-form/new-recipe-form';
import { useLayoutConfig } from '~/context/layout-config/use-layout-config';

export const NewRecipePage = () => {
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
            px={{ base: 4, sm: 5, md: 6 }}
        >
            <NewRecipeForm />
        </Box>
    );
};
