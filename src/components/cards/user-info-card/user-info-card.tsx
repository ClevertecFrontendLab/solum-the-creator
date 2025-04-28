import { Avatar, Flex, Heading, ResponsiveValue, Text, useBreakpointValue } from '@chakra-ui/react';

type UserInfoCardProps = {
    avatarUrl?: string;
    fullName?: string;
    userName?: string;
    size?: ResponsiveValue<'sm' | 'md'>;
};

const SIZE_STYLE_MAP = {
    sm: {
        avatar: 'sm',
        heading: 'sm',
        usernameFontSize: 'xs',
        gap: 2,
        height: '2.5rem',
    },
    md: {
        avatar: 'md',
        heading: 'md',
        usernameFontSize: 'sm',
        gap: 3,
        height: '3rem',
    },
};

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
    avatarUrl,
    fullName = 'Неизвестный пользователь',
    userName = 'username',
    size = 'md',
}) => {
    const currentSize =
        useBreakpointValue(typeof size === 'object' ? size : { base: size }) ?? 'md';

    const styles = SIZE_STYLE_MAP[currentSize];

    return (
        <Flex
            gap={styles.gap}
            alignItems='center'
            maxW={{ base: '280px', lg: '360px' }}
            height={styles.height}
        >
            <Avatar name={fullName} src={avatarUrl} size={styles.avatar} />
            <Flex direction='column' overflow='hidden'>
                <Heading
                    as='h2'
                    size={styles.heading}
                    fontWeight='500'
                    noOfLines={1}
                    wordBreak='break-all'
                >
                    {fullName}
                </Heading>
                <Text fontSize={styles.usernameFontSize} color='blackAlpha.700' isTruncated={true}>
                    @{userName}
                </Text>
            </Flex>
        </Flex>
    );
};
