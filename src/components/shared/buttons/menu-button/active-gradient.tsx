import { Box } from '@chakra-ui/react';

export const ActiveGradient: React.FC<{ inset: string }> = ({ inset }) => (
    <Box
        position='absolute'
        top={`-${inset}`}
        left={`-${inset}`}
        right={`-${inset}`}
        bottom={`-${inset}`}
        borderRadius='full'
        bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
        zIndex={0}
        pointerEvents='none'
    />
);
