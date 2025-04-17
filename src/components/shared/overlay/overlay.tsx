import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { fadeIn } from '~/constants/motions/motion-presets';

const MotionBox = motion.create(Box);

type OverlayProps = {
    onClick?: () => void;
};

export const Overlay: React.FC<OverlayProps> = ({ onClick }) => (
    <MotionBox
        position='fixed'
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg='blackAlpha.400'
        zIndex={5}
        onClick={onClick}
        {...fadeIn}
    />
);
