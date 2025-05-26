import { Box, Flex } from '@chakra-ui/react';

import { FormImageUpload } from '~/components/shared/inputs/form-image-upload/form-image-upload';

export const NewRecipeHeader = () => (
    <Flex
        as='section'
        direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
        mt={{ base: 4, lg: 14 }}
        gap={{ base: 4, lg: 6 }}
        width='100%'
    >
        <Box flex={{ base: 1, sm: 1, lg: 5 }} overflow='hidden' w='100%'>
            <Box h={{ base: '14rem', lg: '25.625rem' }} w='100%'>
                <FormImageUpload name='image' />
            </Box>
        </Box>
        <Box flex={{ base: 1, sm: 2, lg: 7 }}>info</Box>
    </Flex>
);
