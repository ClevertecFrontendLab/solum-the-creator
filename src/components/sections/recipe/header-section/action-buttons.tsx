import { Button, HStack, Icon } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { useRecipeLike } from '~/hooks/use-recipe-like';

type ActionButtonsProps = {
    recipeId: string;
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({ recipeId }) => {
    const { handleToggleLike, isLoading } = useRecipeLike(recipeId);

    return (
        <HStack spacing={{ base: 3, xl: 4 }}>
            <Button
                variant='outline'
                colorScheme='black'
                size={{ base: 'xs', md: 'sm', '2xl': 'lg' }}
                leftIcon={<Icon as={EmojiHeartIcon} />}
                onClick={handleToggleLike}
                isLoading={isLoading}
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
};
