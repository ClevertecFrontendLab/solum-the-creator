import { Box, Portal, useToken, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { SidebarContent } from './sidebar-content';

const MotionBox = motion.create(Box);

type MobileSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
    const [headerHeight] = useToken('sizes', ['16']);

    return (
        <AnimatePresence>
            {isOpen && (
                <Portal>
                    <MotionBox
                        position='fixed'
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bg='blackAlpha.400'
                        zIndex={5}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />

                    <MotionBox
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{
                            duration: 0.2,
                        }}
                        position='fixed'
                        top={headerHeight}
                        right={2}
                        zIndex={12}
                        px={4}
                        pb={4}
                        pt={2}
                        bg='white'
                        borderBottomRadius='xl'
                        boxShadow='lg'
                        maxW='21.5rem'
                        maxH='calc(100vh - 9.25rem)'
                        overflowY='auto'
                    >
                        <VStack spacing={4} w='100%'>
                            <SidebarContent />
                        </VStack>
                    </MotionBox>
                </Portal>
            )}
        </AnimatePresence>
    );
};
