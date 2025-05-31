import {
    RecipeDraftFormData,
    RecipeFormData,
} from '~/components/ui/forms/new-recipe-form/recipe-schema';
import { Ingredient, NutritionValue, RecipeStep } from '~/constants/data/recipes';
import { getValuable } from '~/utils/get-valuable-obj';
import { transformRecipeResponse } from '~/utils/image';

import { ApiEndpoints } from '../../constants/api';
import { ApiGroupNames } from '../../constants/api-group-names';
import { EndpointNames } from '../../constants/endpoint-names';
import { Tags } from '../../constants/tags';
import { apiSlice } from '../../create-api';
import {
    invalidatesById,
    invalidatesRecipe,
    providesInfiniteRecipes,
    providesInfiniteWrapperRecipes,
    providesRecipeList,
    providesTopRecipes,
} from './utils/tags';

export type Recipe = {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    time: number;
    image: string;
    likes: number;
    bookmarks: number;
    views: number;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: RecipeStep[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    garnish?: string;
    meat?: string;
};

type RecipeResponse = {
    data: Recipe[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};

export type RecipesInitialPageParam = {
    page: number;
    limit: number;
};

export type FilterParams = {
    page: number;
    limit: number;
    searchString?: string;
    subcategoriesIds?: string[];
    meat?: string[];
    garnish?: string[];
    allergens?: string[];
    excludeAllergens?: boolean;
};

export type SortParams = Partial<{
    sortBy: 'likes' | 'createdAt';
    sortOrder: 'asc' | 'desc';
}>;

export const recipeApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.RECIPE],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            [EndpointNames.GET_RECIPES]: builder.query<Recipe[], number>({
                query: (limit) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: { limit, page: 1, sortBy: 'createdAt', sortOrder: 'desc' },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES,
                }),
                transformResponse: (response: { data: Recipe[] }): Recipe[] =>
                    transformRecipeResponse(response.data),
                providesTags: providesRecipeList,
            }),

            [EndpointNames.GET_JUICIEST_RECIPES]: builder.query<Recipe[], void>({
                query: () => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: { sortBy: 'likes', limit: '4', page: '1', sortOrder: 'desc' },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_JUICIEST_RECIPES,
                }),
                transformResponse: (res: { data: Recipe[] }) => transformRecipeResponse(res.data),
                providesTags: providesTopRecipes,
            }),
            [EndpointNames.GET_JUICIEST_RECIPES_PAGINATED]: builder.infiniteQuery<
                { data: Recipe[]; meta: RecipeResponse['meta'] },
                { perPage: number },
                RecipesInitialPageParam
            >({
                infiniteQueryOptions: {
                    initialPageParam: {
                        page: 1,
                        limit: 8,
                    },
                    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                        const totalAvailablePages = lastPage.meta.totalPages;

                        if (lastPage.meta.page >= totalAvailablePages) {
                            return undefined;
                        }

                        return {
                            ...lastPageParam,
                            page: lastPageParam.page + 1,
                        };
                    },
                },
                query: ({ queryArg: { perPage }, pageParam: { page } }) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: { limit: perPage, page, sortBy: 'likes', sortOrder: 'desc' },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_JUICIEST_RECIPES_PAGINATED,
                }),
                providesTags: providesInfiniteWrapperRecipes,
                transformResponse: (response: RecipeResponse) => ({
                    data: transformRecipeResponse(response.data),
                    meta: response.meta,
                }),
            }),
            [EndpointNames.GET_RECIPES_BY_SUBCATEGORY_IDS]: builder.query<
                Recipe[],
                { limit: number; subcategoryIds: string[] }
            >({
                query: ({ limit, subcategoryIds }) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: {
                        limit,
                        page: 1,
                        subcategoriesIds: subcategoryIds,
                    },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES_BY_SUBCATEGORY_IDS,
                }),
                transformResponse: (response: { data: Recipe[] }): Recipe[] =>
                    transformRecipeResponse(response.data),
                providesTags: providesRecipeList,
            }),
            [EndpointNames.GET_RELEVANT_RECIPES]: builder.query<
                Recipe[],
                { subcategoryId: string }
            >({
                query: ({ subcategoryId }) => ({
                    url: `${ApiEndpoints.RECIPE_CATEGORY}${subcategoryId}`,
                    method: 'GET',
                    params: {
                        limit: '5',
                    },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RELEVANT_RECIPES,
                }),
                transformResponse: (response: { data: Recipe[] }): Recipe[] =>
                    transformRecipeResponse(response.data),
            }),
            [EndpointNames.GET_RECIPES_BY_CATEGORY_ID_PAGINATED]: builder.infiniteQuery<
                Recipe[],
                { perPage: number; categoryId: string },
                RecipesInitialPageParam
            >({
                infiniteQueryOptions: {
                    initialPageParam: {
                        page: 1,
                        limit: 8,
                    },
                    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                        if (lastPage.length < lastPageParam.limit) {
                            return undefined;
                        }

                        return {
                            ...lastPageParam,
                            page: lastPageParam.page + 1,
                        };
                    },
                },
                query: ({ queryArg: { perPage, categoryId }, pageParam: { page } }) => ({
                    url: `${ApiEndpoints.RECIPE_CATEGORY}${categoryId}`,
                    method: 'GET',
                    params: { limit: perPage, page },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPES_BY_CATEGORY_ID_PAGINATED,
                }),
                providesTags: providesInfiniteRecipes,
                transformResponse: (response: RecipeResponse): Recipe[] =>
                    transformRecipeResponse(response.data),
            }),
            [EndpointNames.GET_RECIPE_BY_ID]: builder.query<Recipe, string>({
                query: (id) => ({
                    url: `${ApiEndpoints.RECIPE}/${id}`,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_RECIPE_BY_ID,
                }),
                transformResponse: (response: Recipe): Recipe => transformRecipeResponse(response),
                providesTags: (result, _error, id) =>
                    result ? [{ type: Tags.RECIPE as const, id }] : [],
            }),
            [EndpointNames.GET_FILTERED_RECIPES]: builder.infiniteQuery<
                Recipe[],
                {
                    filters: Omit<FilterParams, 'page' | 'limit'>;
                    perPage: number;
                    sort?: SortParams;
                    version: number;
                },
                RecipesInitialPageParam
            >({
                infiniteQueryOptions: {
                    initialPageParam: {
                        page: 1,
                        limit: 8,
                    },
                    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                        if (lastPage.length < lastPageParam.limit) {
                            return undefined;
                        }

                        return {
                            ...lastPageParam,
                            page: lastPageParam.page + 1,
                        };
                    },
                },

                query: ({ queryArg: { filters, perPage, sort }, pageParam: { page } }) => {
                    const params = {
                        ...filters,
                        ...sort,
                        page,
                        limit: perPage,
                    };

                    const clearParams = getValuable(params);

                    return {
                        url: `${ApiEndpoints.RECIPE}`,
                        method: 'GET',
                        params: clearParams,
                        apiGroupName: ApiGroupNames.RECIPE,
                        name: EndpointNames.GET_FILTERED_RECIPES,
                    };
                },
                providesTags: providesInfiniteRecipes,
                transformResponse: (response: RecipeResponse): Recipe[] =>
                    transformRecipeResponse(response.data),
            }),

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
                invalidatesTags: (_result, _error, id) => invalidatesById(id),
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
                            recipeApiSlice.util.updateQueryData(
                                EndpointNames.GET_RECIPE_BY_ID,
                                recipeId,
                                (draft) => {
                                    draft.bookmarks = updatedBoomark.count;
                                },
                            ),
                        );

                        const state = getState();

                        const categoryArgs = recipeApiSlice.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_RECIPES_BY_CATEGORY_ID_PAGINATED,
                        );

                        dispatch(
                            recipeApiSlice.util.updateQueryData(
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

                        const juiciestArgs = recipeApiSlice.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_JUICIEST_RECIPES_PAGINATED,
                        );

                        dispatch(
                            recipeApiSlice.util.updateQueryData(
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

                        const filteredArgs = recipeApiSlice.util.selectCachedArgsForQuery(
                            state,
                            EndpointNames.GET_FILTERED_RECIPES,
                        );

                        dispatch(
                            recipeApiSlice.util.updateQueryData(
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
                        // do nothing
                    }
                },
            }),
        }),
        overrideExisting: false,
    });

export const {
    useGetRecipesQuery,
    useLazyGetRecipesQuery,
    useGetJuiciestRecipesQuery,
    useGetJuiciestRecipesPaginatedInfiniteQuery,
    useGetRecipesByCategoryIdPaginatedInfiniteQuery,
    useGetRecipesBySubcategoryIdsQuery,
    useGetRecipeByIdQuery,
    useGetFilteredRecipesInfiniteQuery,
    useGetRelevantRecipesQuery,
    useCreateRecipeMutation,
    useUpdateRecipeMutation,
    useCreateRecipeDraftMutation,
    useDeleteRecipeMutation,
    useToggleLikeRecipeMutation,
    useToggleBookmarkRecipeMutation,
} = recipeApiSlice;
