import { Text } from '@chakra-ui/react';

export const HeroDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Text
        fontSize={{ base: 'sm', md: 'md' }}
        color='blackAlpha.600'
        fontWeight='500'
        maxW={{ base: '100%', md: '43.5rem' }}
        textAlign='center'
    >
        {children}
    </Text>
);
