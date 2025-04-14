import { Box, VStack } from '@chakra-ui/react';

import { HeroDescription } from './hero-description';
import { HeroFilters } from './hero-filters';
import { HeroSearch } from './hero-search';
import { HeroTitle } from './hero-title';

type HeroSectionProps = {
    title: string;
    description?: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => (
    <Box as='section' pt={{ base: 4, md: 8 }} pb={{ base: 8 }} width='100%'>
        <VStack align='center' spacing={{ base: 4, md: 8 }}>
            <VStack align='center' spacing={{ base: 3, md: 4 }}>
                <HeroTitle>{title}</HeroTitle>

                {description && <HeroDescription>{description}</HeroDescription>}
            </VStack>

            <VStack align='center' spacing={4} width='100%'>
                <HeroSearch />
                <Box display={{ base: 'none', md: 'flex' }} width='100%' justifyContent='center'>
                    <HeroFilters />
                </Box>
            </VStack>
        </VStack>
    </Box>
);
