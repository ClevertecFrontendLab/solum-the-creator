import { Icon, IconButton } from '@chakra-ui/react';

import DeleteIcon from '~/assets/icons/delete-icon.svg?react';

type DeleteRecipeButtonProps = {
    onClick: () => void;
};

export const DeleteRecipeButton: React.FC<DeleteRecipeButtonProps> = ({ onClick }) => (
    <IconButton
        aria-label='Удалить'
        icon={<Icon as={DeleteIcon} boxSize={{ base: 3, md: 4 }} />}
        onClick={onClick}
        w={{ base: '1.5rem', md: '3rem' }}
        h={{ base: '1.25rem', md: '3rem' }}
        variant='clear'
    />
);
