import { Button, Icon } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import EditIcon from '~/assets/icons/edit-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

export const EditRecipeButton: React.FC = () => {
    const navigate = useNavigate();
    const { category, subcategory, recipeId } = useParams<{
        category: string;
        subcategory: string;
        recipeId: string;
    }>();

    const handleClick = () => {
        if (!category || !subcategory || !recipeId) {
            return;
        }

        navigate(pathes.getEditRecipe(category, subcategory, recipeId));
    };

    return (
        <Button
            leftIcon={<Icon as={EditIcon} />}
            variant='outline'
            colorScheme='black'
            size='lg'
            px={2}
            onClick={handleClick}
        >
            Редактировать рецепт
        </Button>
    );
};
