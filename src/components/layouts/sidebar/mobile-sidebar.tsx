import { Box, HStack, Portal, useToken, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Overlay } from '~/components/shared/overlay/overlay';
import { Breadcrumbs } from '~/components/widgets/breadcrumbs/breadcrumbs';
import { heightExpand } from '~/constants/motions/motion-presets';
import { useScrollLock } from '~/hooks/use-scroll-lock';

import { SidebarContent } from './sidebar-content';

const MotionBox = motion.create(Box);

type MobileSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
    const [headerHeight, sidebarWidth, sidebarHeight] = useToken('sizes', [
        'mobileHeader',
        'mobileSidebarWidth',
        'mobileSidebarHeight',
    ]);

    useScrollLock(isOpen);

    return (
        <AnimatePresence>
            {isOpen && (
                <Portal>
                    <Overlay onClick={onClose} />

                    <MotionBox
                        position='fixed'
                        top={headerHeight}
                        right={2}
                        zIndex={12}
                        bg='white'
                        borderBottomRadius='xl'
                        boxShadow='lg'
                        w='100%'
                        maxW={sidebarWidth}
                        maxH={sidebarHeight}
                        overflow='hidden'
                        {...heightExpand}
                    >
                        <VStack gap={0} w='100%' maxH={sidebarHeight} data-test-id='nav'>
                            <HStack px={5} justify='start' w='100%' py={4}>
                                <Breadcrumbs onNavigate={onClose} />
                            </HStack>
                            <SidebarContent />
                        </VStack>
                    </MotionBox>
                </Portal>
            )}
        </AnimatePresence>
    );
};
