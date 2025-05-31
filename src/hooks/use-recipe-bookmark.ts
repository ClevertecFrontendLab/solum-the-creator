import { notificationServerError } from '~/constants/texts/notifications';
import { useToggleBookmarkRecipeMutation } from '~/query/services/recipe/recipe';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

export const useRecipeBookmark = (recipeId: string) => {
    const dispatch = useAppDispatch();
    const [toggleBookmark, { isLoading }] = useToggleBookmarkRecipeMutation();

    const handleToggleBookmark = async () => {
        try {
            const { count: bookmarks } = await toggleBookmark(recipeId).unwrap();
            return bookmarks;
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

    return { handleToggleBookmark, isLoading };
};
