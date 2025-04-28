import { Box } from '@chakra-ui/react';

type FullBleedProps = {
    children: React.ReactNode;
};

export const FullBleed = ({ children }: FullBleedProps) => (
    <Box
        mx={{ base: '-1rem', sm: '-1.25rem', md: 0 }}
        px={{ base: '1rem', sm: '1.25rem', md: 0 }}
        pr={{ base: 0 }}
    >
        {children}
    </Box>
);
