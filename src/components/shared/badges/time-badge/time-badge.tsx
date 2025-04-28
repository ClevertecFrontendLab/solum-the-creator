import { Badge, Box, HStack, Icon } from '@chakra-ui/react';

import AlramIcon from '~/assets/icons/alarm-icon.svg?react';

type TimeBadge = {
    label: string;
};

export const TimeBadge: React.FC<TimeBadge> = ({ label }) => (
    <Badge variant='brand' display='inline-flex' bgColor='blackAlpha.100' alignItems='center'>
        <HStack spacing={{ base: 1, md: 2 }}>
            <Icon as={AlramIcon} boxSize={4} />
            <Box as='span'>{label}</Box>
        </HStack>
    </Badge>
);
