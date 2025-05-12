import { Box, Flex, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

export const AuthLayout = () => (
    <HStack>
        <Flex>
            <Outlet />
        </Flex>
        <Box>Image</Box>
    </HStack>
);
