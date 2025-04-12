import { Heading } from '@chakra-ui/react';

type HeroTitleProps = {
    children: React.ReactNode;
};

export const HeroTitle: React.FC<HeroTitleProps> = ({ children }) => (
    <Heading as='h1' size={{ base: 'xl', md: '2xl' }} textAlign='center' fontWeight='bold'>
        {children}
    </Heading>
);
