import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

type UserInfoCardProps = {
    avatarUrl?: string;
    fullName?: string;
    userName?: string;
};

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
    avatarUrl,
    fullName = 'Неизвестный пользователь',
    userName = 'username',
}) => (
    <Flex gap={3} alignItems='center'>
        <Avatar name={fullName} src={avatarUrl} />
        <Flex direction='column'>
            <Heading as='h2' size='md' isTruncated={true}>
                {fullName}
            </Heading>
            <Text fontSize='sm' color='blackAlpha.700' isTruncated={true}>
                @{userName}
            </Text>
        </Flex>
    </Flex>
);
