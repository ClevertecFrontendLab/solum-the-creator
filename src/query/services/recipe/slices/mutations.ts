import {
    RecipeDraftFormData,
    RecipeFormData,
} from '~/components/ui/forms/new-recipe-form/recipe-schema';
import { ApiEndpoints } from '~/query/constants/api';
import { EndpointNames } from '~/query/constants/endpoint-names';
import { Tags } from '~/query/constants/tags';
import { apiSlice } from '~/query/create-api';
import { Recipe } from '~/types/recipe';

import { invalidatesById, invalidatesRecipe } from '../utils/tags';
import { recipeApiQuaries } from './quaries';

export const recipeApiMutations = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.RECIPE],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            [EndpointNames.CREATE_RECIPE]: builder.mutation<Recipe, RecipeFormData>({
                query: (body) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: invalidatesRecipe,
            }),
            [EndpointNames.CREATE_RECIPE_DRAFT]: builder.mutation<void, RecipeDraftFormData>({
                query: (body) => ({
                    url: ApiEndpoints.RECIPE_DRAFT,
                    method: 'POST',
                    body,
                }),
            }),
            [EndpointNames.UPDATE_RECIPE]: builder.mutation<
                Recipe,
                { id: string; body: RecipeFormData }
            >({
                query: ({ id, body }) => ({
                    url: `${ApiEndpoints.RECIPE}/${id}`,
                    method: 'PATCH',
                    body,
                }),
                invalidatesTags: (_result, _error, { id }) => invalidatesById(id),
            }),
            [EndpointNames.DELETE_RECIPE]: builder.mutation<void, string>({
                query: (id) => ({
                    url: `${ApiEndpoints.RECIPE}/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: () => [{ type: Tags.RECIPE as const, id: 'LIST' }],
            }),
            [EndpointNames.TOGGLE_LIKE_RECIPE]: builder.mutation<
                { message: string; likes: number },
                string
            >({
                query: (recipeId) => ({
                    url: `${ApiEndpoints.RECIPE}/${recipeId}/like`,
                    method: 'POST',
                }),
                invalidatesTags: (_result, _error, recipeId) => [
                    { type: Tags.RECIPE, id: recipeId },
                ],
            }),
            [EndpointNames.TOGGLE_BOOKMARK_RECIPE]: builder.mutation<
                { message: string; count: number },
                string
            >({
                query: (recipeId) => ({
                    url: `${ApiEndpoints.RECIPE}/${recipeId}/bookmark`,
                    method: 'POST',
                }),
                async onQueryStarted(recipeId, { dispatch, queryFulfilled, getState }) {
                    try {
                        const { data: updatedBoomark } = await queryFulfilled;
                        dispatch(
                            recipeApiQuaries.util.updateQueryData(
                                EndpointNames.GET_RECIPE_BY_ID,
                                recipeId,
                                (draft) => {
                                    draft.bookmarks = updatedBoomark.count;
                                },
                            ),
                        );

                        const state = getState();

                        const categoryArgs = recipeApiQuaries.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_RECIPES_BY_CATEGORY_ID_PAGINATED,
                        );

                        dispatch(
                            recipeApiQuaries.util.updateQueryData(
                                EndpointNames.GET_RECIPES_BY_CATEGORY_ID_PAGINATED,
                                categoryArgs[categoryArgs.length - 1],
                                (draft) => {
                                    draft.pages = draft.pages.map((page) =>
                                        page.map((recipe) =>
                                            recipe._id === recipeId
                                                ? { ...recipe, bookmarks: updatedBoomark.count }
                                                : recipe,
                                        ),
                                    );
                                },
                            ),
                        );

                        const juiciestArgs = recipeApiQuaries.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_JUICIEST_RECIPES_PAGINATED,
                        );

                        dispatch(
                            recipeApiQuaries.util.updateQueryData(
                                EndpointNames.GET_JUICIEST_RECIPES_PAGINATED,
                                juiciestArgs[juiciestArgs.length - 1],
                                (draft) => {
                                    draft.pages = draft.pages.map(({ data, ...page }) => ({
                                        ...page,
                                        data: data.map((recipe) =>
                                            recipe._id === recipeId
                                                ? { ...recipe, bookmarks: updatedBoomark.count }
                                                : recipe,
                                        ),
                                    }));
                                },
                            ),
                        );

                        const juiciestTopArgs = recipeApiQuaries.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_JUICIEST_RECIPES,
                        );

                        juiciestTopArgs.forEach((args) => {
                            dispatch(
                                recipeApiQuaries.util.updateQueryData(
                                    EndpointNames.GET_JUICIEST_RECIPES,
                                    args,
                                    (draft) => {
                                        draft.forEach((recipe) => {
                                            if (recipe._id === recipeId) {
                                                recipe.bookmarks = updatedBoomark.count;
                                            }
                                        });
                                    },
                                ),
                            );
                        });

                        const filteredArgs = recipeApiQuaries.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_FILTERED_RECIPES,
                        );

                        dispatch(
                            recipeApiQuaries.util.updateQueryData(
                                EndpointNames.GET_FILTERED_RECIPES,
                                filteredArgs[filteredArgs.length - 1],
                                (draft) => {
                                    draft.pages = draft.pages.map((page) =>
                                        page.map((recipe) =>
                                            recipe._id === recipeId
                                                ? { ...recipe, bookmarks: updatedBoomark.count }
                                                : recipe,
                                        ),
                                    );
                                },
                            ),
                        );
                    } catch {
                        console.error('Error toggling bookmark');
                    }
                },
            }),
        }),
    });

export const {
    useCreateRecipeMutation,
    useUpdateRecipeMutation,
    useCreateRecipeDraftMutation,
    useDeleteRecipeMutation,
    useToggleLikeRecipeMutation,
    useToggleBookmarkRecipeMutation,
} = recipeApiMutations;
