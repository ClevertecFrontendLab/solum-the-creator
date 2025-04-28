import { Button, HStack, Icon } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';

export const ActionButtons = () => (
    <HStack spacing={{ base: 3, xl: 4 }}>
        <Button
            variant='outline'
            colorScheme='black'
            size={{ base: 'xs', md: 'sm', '2xl': 'lg' }}
            leftIcon={<Icon as={EmojiHeartIcon} />}
        >
            Оценить рецепт
        </Button>
        <Button
            variant='brand'
            size={{ base: 'xs', md: 'sm', '2xl': 'lg' }}
            leftIcon={<Icon as={SavedIcon} />}
        >
            Сохранить в закладки
        </Button>
    </HStack>
);
