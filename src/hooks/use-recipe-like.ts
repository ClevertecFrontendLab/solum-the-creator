import { notificationServerError } from '~/constants/texts/notifications';
import { useToggleLikeRecipeMutation } from '~/query/services/recipe/slices/mutations';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

export const useRecipeLike = (recipeId: string) => {
    const dispatch = useAppDispatch();
    const [toggleLike, { isLoading }] = useToggleLikeRecipeMutation();

    const handleToggleLike = async () => {
        try {
            const { likes } = await toggleLike(recipeId).unwrap();
            return likes;
        } catch (_err) {
            dispatch(
                addNotification({
                    type: 'error',
                    title: notificationServerError.title,
                    description: notificationServerError.description,
                }),
            );
        }
    };

    return { handleToggleLike, isLoading };
};
