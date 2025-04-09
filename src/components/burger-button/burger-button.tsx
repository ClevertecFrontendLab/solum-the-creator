import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

type BurgerButtonProps = {
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onOpen, onClose }) => (
    <IconButton
        size='md'
        mx={1}
        icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
        aria-label='Toggle menu'
        onClick={isOpen ? onClose : onOpen}
        variant='clear'
    />
);
