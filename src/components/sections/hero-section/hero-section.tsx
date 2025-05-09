import { Box, Center, Heading, Hide, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { Loader } from '~/components/shared/misc/loader/loader';
import { useAppSelector } from '~/store/hooks';
import { selectIsHeroActive } from '~/store/selectors';

import { HeroDescription } from './hero-description';
import { HeroFilters } from './hero-filters';
import { HeroSearch } from './hero-search';
import { HeroTitle } from './hero-title';

type HeroSectionProps = {
    title: string;
    isEmptyResult?: boolean;
    isSuccessResult?: boolean;
    isLoading?: boolean;
    description?: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    isEmptyResult,
    isSuccessResult,
    isLoading,
    description,
}) => {
    const [isSearchFocused, setSearchFocused] = useState(false);

    const isActive = useAppSelector(selectIsHeroActive);
    const isHeroActive = isActive || isSearchFocused || isEmptyResult;

    return (
        <Box as='section' w='100%' display='flex' justifyContent='center' mb={4}>
            <VStack
                align='center'
                pt={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 8 }}
                pb={{ base: 8 }}
                px={{ base: 4 }}
                rounded='3xl'
                w='100%'
                maxW={{ base: '100%', sm: '30rem', md: '36.125rem', '2xl': '56.125rem' }}
                boxShadow={isHeroActive ? 'xl' : ''}
                transition='box-shadow 0.2s ease-in-out'
            >
                <VStack align='center' spacing={{ base: 3, md: 4 }}>
                    {isEmptyResult ? (
                        <Heading as='h2' fontSize='md' fontWeight='600' textAlign='center'>
                            По вашему запросу ничего не найдено. <br /> Попробуйте другой запрос
                        </Heading>
                    ) : (
                        <HeroTitle>{title}</HeroTitle>
                    )}

                    {description && <HeroDescription>{description}</HeroDescription>}
                </VStack>

                <VStack align='center' spacing={4} width='100%'>
                    {isLoading ? (
                        <Center p='2.5rem'>
                            <Loader isVisible={isLoading} />
                        </Center>
                    ) : (
                        <>
                            <HeroSearch
                                onFocusChange={setSearchFocused}
                                isSuccess={isSuccessResult}
                                isError={isEmptyResult}
                            />
                            <Hide below='md'>
                                <Box display='flex' width='100%' justifyContent='center'>
                                    <HeroFilters />
                                </Box>
                            </Hide>
                        </>
                    )}
                </VStack>
            </VStack>
        </Box>
    );
};
