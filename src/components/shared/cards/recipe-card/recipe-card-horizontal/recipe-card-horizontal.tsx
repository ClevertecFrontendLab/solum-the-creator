import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Hide,
    HStack,
    Icon,
    IconButton,
    Show,
    Text,
    VStack,
} from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import { CategoryKey } from '~/constants/ui/category-icons';

import { ImageSection } from './image-section';
import { TopRow } from './top-row';

type RecipeCardHorizontalProps = {
    image: string;
    title: string;
    description?: string;
    category?: CategoryKey;
    likes?: number;
    bookmarks?: number;
    recommendedBy?: {
        avatarUrl: string;
        fullName: string;
    };
};

export const RecipeCardHorizontal: React.FC<RecipeCardHorizontalProps> = ({
    image,
    title,
    description,
    category,
    recommendedBy,
    likes = 0,
    bookmarks = 0,
}) => (
    <Card w='100%' borderRadius='lg' variant='outline' minH='8rem'>
        <Flex direction='row' height='100%'>
            <ImageSection image={image} category={category} recommendedBy={recommendedBy} />

            <Flex
                direction='column'
                justify='space-between'
                flex='1'
                px={{ base: 2, lg: 6 }}
                py={{ base: 2, lg: 5 }}
                pb={{ base: 1, lg: 6 }}
            >
                <CardBody as={VStack} align='stretch' spacing={{ base: 0, lg: 6 }} px={0} py={0}>
                    <TopRow category={category} likes={likes} bookmarks={bookmarks} />

                    <VStack spacing={2} align='stretch'>
                        <Heading
                            as='h3'
                            fontSize={{ base: 'md', lg: 'xl' }}
                            fontWeight='500'
                            noOfLines={{ base: 2, lg: 1 }}
                            wordBreak='break-all'
                        >
                            {title}
                        </Heading>

                        <Text
                            fontSize='sm'
                            noOfLines={3}
                            display={{ base: 'none', lg: '-webkit-box' }}
                        >
                            {description}
                        </Text>
                    </VStack>
                </CardBody>

                <CardFooter px={0} pt={{ base: 5, lg: 6 }} pb={0}>
                    <HStack spacing={{ base: 3, lg: 2 }} justify='flex-end' w='100%'>
                        <Show below='lg'>
                            <IconButton
                                size='xs'
                                icon={<Icon as={SavedIcon} />}
                                variant='outline'
                                colorScheme='black'
                                aria-label='Сохранить'
                            />
                        </Show>

                        <Hide below='lg'>
                            <Button
                                leftIcon={<Icon as={SavedIcon} />}
                                size='sm'
                                variant='outline'
                                colorScheme='black'
                                color='blackAlpha.800'
                            >
                                Сохранить
                            </Button>
                        </Hide>

                        <Button size={{ base: 'xs', lg: 'sm' }} variant='black'>
                            Готовить
                        </Button>
                    </HStack>
                </CardFooter>
            </Flex>
        </Flex>
    </Card>
);
