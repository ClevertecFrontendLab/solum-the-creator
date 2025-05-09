import { Flex } from '@chakra-ui/react';

import { NotFoundSection } from '~/components/sections/not-found-section/not-found-section';

export const NotFoundPage = () => (
    <Flex
        align='flex-start'
        justify='center'
        h='100%'
        flex={1}
        pt={{ base: '9.625rem', sm: '15.5rem', md: '16.75rem' }}
    >
        <NotFoundSection />
    </Flex>
);
