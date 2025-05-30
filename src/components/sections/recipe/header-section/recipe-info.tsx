import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { TimeBadge } from '~/components/shared/badges/time-badge/time-badge';
import { DeleteRecipeButton } from '~/components/shared/buttons/delete-recipe-button/delete-recipe-button';
import { EditRecipeButton } from '~/components/shared/buttons/edit-recipe-button/edit-recipe-button';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { pathes } from '~/constants/navigation/pathes';
import { notificationServerErrorDeleteRecipe } from '~/constants/texts/notifications';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useDeleteRecipeMutation } from '~/query/services/recipe';
import { selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { ActionButtons } from './action-buttons';

type RecipeInfoProps = {
    title: string;
    categoriesIds: string[];
    description: string;
    time: number;
    likes?: number;
    bookmarks?: number;
    isAuthor?: boolean;
};

export const RecipeInfo: React.FC<RecipeInfoProps> = ({
    title,
    categoriesIds,
    description,
    time,
    likes,
    bookmarks,
    isAuthor,
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categories = useAppSelector(selectParentCategoriesBySubIds(categoriesIds));

    const { recipeId } = useParams<{
        recipeId: string;
    }>();

    const [deleteRecipe, { isLoading }] = useDeleteRecipeMutation();
    useGlobalLoading(isLoading);

    const handleDelete = async () => {
        try {
            await deleteRecipe(recipeId!).unwrap();
            navigate(pathes.home, { state: { showSuccessDeleteRecipeNotification: true } });
        } catch (_err) {
            dispatch(
                addNotification({
                    type: 'error',
                    title: notificationServerErrorDeleteRecipe.title,
                    description: notificationServerErrorDeleteRecipe.description,
                }),
            );
        }
    };

    return (
        <VStack w='100%' justify='space-between' h='100%' spacing={6}>
            <Box w='100%'>
                <HStack justify='space-between' w='100%' align='flex-start' mb={8}>
                    <Flex gap={2} flexWrap='wrap'>
                        {categories.map(({ _id, category, title }) => (
                            <CategoryBadge
                                key={_id}
                                title={title}
                                category={category}
                                bgColor='lime.50'
                            />
                        ))}
                    </Flex>
                    <RateButtons bookmarks={bookmarks} likes={likes} size='sm' />
                </HStack>

                <VStack align='start' w='100%' spacing={{ base: 4, md: 6 }}>
                    <Heading as='h1' size={{ base: 'lg', md: '2xl' }} maxW='27rem'>
                        {title}
                    </Heading>
                    <Text fontSize='sm' maxW='33rem'>
                        {description}
                    </Text>
                </VStack>
            </Box>

            <HStack justify='space-between' w='100%' align='flex-end' flexWrap='wrap' gap={3}>
                <TimeBadge label={time.toString()} />

                {isAuthor ? (
                    <HStack spacing={4}>
                        <DeleteRecipeButton onClick={handleDelete} />
                        <EditRecipeButton />
                    </HStack>
                ) : (
                    <ActionButtons recipeId={recipeId!} />
                )}
            </HStack>
        </VStack>
    );
};
