import { Avatar, Card, CardBody, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import FollowersIcon from '~/assets/icons/people-icon.svg?react';
import { StatButton } from '~/components/ui/buttons/shared/stat-button';
import { SubscribeAuthorButton } from '~/components/ui/buttons/subscribe-author-button/subscribe-author-button';

type RecipeAuthorCardProps = {
    userName: string;
    fullName: string;
    avatarUrl: string;
    followers?: number;
};

export const RecipeAuthorCard: React.FC<RecipeAuthorCardProps> = ({
    userName,
    fullName,
    avatarUrl,
    followers = 0,
}) => (
    <Card w='100%' variant='brand' rounded='lg'>
        <CardBody
            display='flex'
            p={{ base: 3, sm: 6 }}
            alignItems={{ base: 'flex-end', sm: 'center' }}
            gap={{ base: 2, sm: 4 }}
            position='relative'
        >
            <Avatar name={fullName} src={avatarUrl} size='xl' />
            <VStack w='100%' align='stretch' gap={4}>
                <VStack w='100%' align='stretch' gap={{ base: 0, sm: 1 }}>
                    <Flex justify='space-between'>
                        <Heading
                            as='h4'
                            size={{ base: 'md', sm: 'lg' }}
                            fontWeight={{ base: '600', sm: '700' }}
                            noOfLines={1}
                            wordBreak='break-all'
                        >
                            {fullName}
                        </Heading>
                        <Text
                            as='span'
                            position={{ base: 'absolute', sm: 'unset' }}
                            top={2}
                            right={1.5}
                            fontSize={{ base: 'xs', sm: 'sm' }}
                        >
                            Автор рецепта
                        </Text>
                    </Flex>
                    <Text as='span' color='blackAlpha.700' fontSize='sm'>
                        @{userName}
                    </Text>
                </VStack>

                <Flex justify='space-between'>
                    <SubscribeAuthorButton />
                    <StatButton icon={FollowersIcon} count={followers} />
                </Flex>
            </VStack>
        </CardBody>
    </Card>
);
