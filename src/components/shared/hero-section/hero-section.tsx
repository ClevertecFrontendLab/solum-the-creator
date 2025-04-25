import { Box, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { useAppSelector } from '~/store/hooks';
import { selectIsHeroActive } from '~/store/selectors';

import { HeroDescription } from './hero-description';
import { HeroFilters } from './hero-filters';
import { HeroSearch } from './hero-search';
import { HeroTitle } from './hero-title';

type HeroSectionProps = {
    title: string;
    description?: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
    const [isSearchFocused, setSearchFocused] = useState(false);

    const isActive = useAppSelector(selectIsHeroActive);

    const isHeroActive = isActive || isSearchFocused;

    return (
        <Box as='section' width='100%' display='flex' justifyContent='center'>
            <VStack
                align='center'
                pt={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 8 }}
                pb={{ base: 8 }}
                rounded='3xl'
                w='100%'
                maxW={{ base: '100%', sm: '30rem', md: '36.125rem', '2xl': '56.125rem' }}
                boxShadow={isHeroActive ? 'xl' : ''}
                transition='box-shadow 0.2s ease-in-out'
            >
                <VStack align='center' spacing={{ base: 3, md: 4 }}>
                    <HeroTitle>{title}</HeroTitle>

                    {description && <HeroDescription>{description}</HeroDescription>}
                </VStack>

                <VStack align='center' spacing={4} width='100%'>
                    <HeroSearch onFocusChange={setSearchFocused} />
                    <Box
                        display={{ base: 'none', md: 'flex' }}
                        width='100%'
                        justifyContent='center'
                    >
                        <HeroFilters />
                    </Box>
                </VStack>
            </VStack>
        </Box>
    );
};
