import { Heading, Hide, HStack, Show, SimpleGrid, VStack } from '@chakra-ui/react';

import { AuthorCard } from '~/components/cards/author-card/author-card';
import { AllAuthorsButton } from '~/components/shared/buttons/all-authors-button';
import { authors } from '~/constants/data/authors';

export const CulinaryBlogsSection = () => (
    <VStack
        as='section'
        px={{ base: 3, md: 6 }}
        py={{ base: 3, md: 6 }}
        spacing={{ base: 3, md: 4, '2xl': 6 }}
        align='center'
        width='100%'
        bgColor='lime.300'
        rounded='2xl'
    >
        <HStack justify='space-between' align='flex-start' width='100%'>
            <Heading fontSize={{ base: '2xl', lg: '3xl', '2xl': '4xl' }} fontWeight='500'>
                Кулинарные блоги
            </Heading>
            <Hide below='lg'>
                <AllAuthorsButton />
            </Hide>
        </HStack>

        <SimpleGrid columns={{ base: 1, sm: 3, md: 1, xl: 3 }} spacing={{ base: 3, md: 4 }}>
            {authors.map(({ id, avatarUrl, userName, fullName, description }) => (
                <AuthorCard
                    key={id}
                    avatarUrl={avatarUrl}
                    userName={userName}
                    fullName={fullName}
                    description={description}
                />
            ))}
        </SimpleGrid>

        <Show below='lg'>
            <AllAuthorsButton />
        </Show>
    </VStack>
);
