import { Box, Spinner } from '@chakra-ui/react';

type LoaderProps = {
    isVisible: boolean;
    variant?: 'fullscreen' | 'inline';
    size?: 'md' | 'lg';
};

const sizeMap = {
    md: {
        boxSize: '24px',
        spinnerSize: 'md',
    },
    lg: {
        boxSize: '42px',
        spinnerSize: 'xl',
    },
};

export const Loader: React.FC<LoaderProps> = ({ isVisible, variant = 'inline', size = 'md' }) => {
    const { boxSize, spinnerSize } = sizeMap[size];

    const SpinnerWithGradient = (
        <Box
            position='relative'
            display='inline-block'
            boxSize={boxSize}
            data-test-id='loader-search-block'
        >
            <Box
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%) scale(5)'
                width='100%'
                height='100%'
                borderRadius='50%'
                bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
                pointerEvents='none'
                zIndex={0}
            />
            <Spinner
                size={spinnerSize}
                thickness='3px'
                speed='0.65s'
                position='relative'
                zIndex={1}
            />
        </Box>
    );

    if (variant === 'fullscreen') {
        return (
            isVisible && (
                <Box
                    position='fixed'
                    top={0}
                    left={0}
                    w='100vw'
                    h='100vh'
                    bg='blackAlpha.300'
                    backdropFilter='blur(2px)'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    zIndex='toast'
                    data-test-id='app-loader'
                >
                    {SpinnerWithGradient}
                </Box>
            )
        );
    }

    return (
        isVisible && (
            <Box display='flex' alignItems='center' justifyContent='center'>
                {SpinnerWithGradient}
            </Box>
        )
    );
};
