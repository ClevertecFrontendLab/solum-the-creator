import { Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import notFoundImage from '~/assets/images/404.png';
import { pathes } from '~/constants/navigation/pathes';

export const NotFoundSection = () => (
    <VStack spacing={8} p={8} maxW={{ base: '19.75rem', md: '24.75rem' }}>
        <Image src={notFoundImage} alt='404' boxSize={{ base: '6.75rem', md: '12.875rem' }} />
        <VStack spacing={4} justify='center' textAlign='center' px={{ base: 6, md: 0 }}>
            <Heading as='h2' fontSize='2xl'>
                Упс! Такой страницы нет
            </Heading>
            <Text color='blackAlpha.700'>
                Можете поискать другой рецепт{' '}
                <Link as={RouterLink} to={pathes.home} textDecoration='underline'>
                    здесь
                </Link>
                .
            </Text>
        </VStack>
    </VStack>
);
