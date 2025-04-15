import { Avatar, Badge, Text } from '@chakra-ui/react';

type RecommendBadgeProps = {
    avatarUrl: string;
    fullName: string;
};

export const RecommendBadge: React.FC<RecommendBadgeProps> = ({ avatarUrl, fullName }) => (
    <Badge
        variant='brand'
        display='inline-flex'
        alignItems='center'
        py={1}
        gap={2}
        width='fit-content'
    >
        <Avatar src={avatarUrl} name={fullName} size='2xs' />
        <Text as='span'>{fullName} рекомендует</Text>
    </Badge>
);
