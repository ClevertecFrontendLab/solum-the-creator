import { Card, CardBody, Text, VStack } from '@chakra-ui/react';

import { UserInfoCard } from '~/components/cards/user-info-card/user-info-card';

type AuthorCardProps = {
    avatarUrl: string;
    fullName: string;
    userName: string;
    description: string;
};

export const AuthorCard: React.FC<AuthorCardProps> = ({
    avatarUrl,
    fullName,
    userName,
    description,
}) => (
    <Card w='100%' borderRadius='lg' variant='outline' h={{ base: '9.5rem', '2xl': '11.5rem' }}>
        <CardBody
            as={VStack}
            align='start'
            spacing={{ base: 4, '2xl': 7 }}
            px={{ base: 4, '2xl': 6 }}
            pt={{ base: 4, '2xl': 6 }}
            pb={{ base: 4, '2xl': 5 }}
        >
            <UserInfoCard
                avatarUrl={avatarUrl}
                fullName={fullName}
                userName={userName}
                size={{ base: 'sm', '2xl': 'md' }}
            />

            <Text fontSize='sm' color='blackAlpha.800' noOfLines={3}>
                {description}
            </Text>
        </CardBody>
    </Card>
);
