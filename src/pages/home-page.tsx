import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const HomePage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Приятного аппетита!' />
    </Flex>
);
