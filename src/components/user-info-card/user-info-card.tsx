import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

type UserInfoCardProps = {
    avatarUrl?: string;
    fullName?: string;
    userName?: string;
    avatarSize?: string;
};

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
    avatarUrl,
    fullName = 'Неизвестный пользователь',
    userName = 'username',
}) => (
    <Flex gap={{ base: 2, md: 3 }} alignItems='center' maxW={{ base: '280px', lg: '360px' }}>
        <Avatar name={fullName} src={avatarUrl} size={{ base: 'sm', md: 'md' }} />
        <Flex direction='column' overflow='hidden'>
            <Heading as='h2' size={{ base: 'sm', md: 'md' }} noOfLines={1} wordBreak='break-all'>
                {fullName}
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color='blackAlpha.700' isTruncated={true}>
                @{userName}
            </Text>
        </Flex>
    </Flex>
);
