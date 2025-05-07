import { Ingredient, NutritionValue, RecipeStep } from '~/constants/data/recipes';
import { getValuable } from '~/utils/get-valuable-obj';
import { transformRecipeResponse } from '~/utils/image';

import { ApiEndpoints } from '../constants/api';
import { ApiGroupNames } from '../constants/api-group-names';
import { EndpointNames } from '../constants/endpoint-names';
import { Tags } from '../constants/tags';
import { apiSlice } from '../create-api';

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

type RecipesInitialPageParam = {
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

export type SortParams = {
    sortBy?: 'likes' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
};

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
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ _id }) => ({
                                  type: Tags.RECIPE as const,
                                  id: _id,
                              })),
                              { type: Tags.RECIPE, id: 'LIST' },
                          ]
                        : [{ type: Tags.RECIPE, id: 'LIST' }],
            }),

            [EndpointNames.GET_JUICIEST_RECIPES]: builder.query<Recipe[], number>({
                query: (limit) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: { limit, page: '1', sortBy: 'likes', sortOrder: 'desc' },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_JUICIEST_RECIPES,
                }),
                transformResponse: (res: { data: Recipe[] }) => transformRecipeResponse(res.data),
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map((r) => ({ type: Tags.RECIPE as const, id: r._id })),
                              { type: Tags.RECIPE, id: 'TOP' as const },
                          ]
                        : [{ type: Tags.RECIPE, id: 'TOP' as const }],
            }),
            [EndpointNames.GET_JUICIEST_RECIPES_PAGINATED]: builder.infiniteQuery<
                Recipe[],
                { perPage: number },
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
                query: ({ queryArg: { perPage }, pageParam: { page } }) => ({
                    url: ApiEndpoints.RECIPE,
                    method: 'GET',
                    params: { limit: perPage, page, sortBy: 'likes', sortOrder: 'desc' },
                    apiGroupName: ApiGroupNames.RECIPE,
                    name: EndpointNames.GET_JUICIEST_RECIPES_PAGINATED,
                }),
                transformResponse: (response: RecipeResponse): Recipe[] =>
                    transformRecipeResponse(response.data),
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
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ _id }) => ({
                                  type: Tags.RECIPE as const,
                                  id: _id,
                              })),
                              { type: Tags.RECIPE, id: 'LIST' },
                          ]
                        : [{ type: Tags.RECIPE, id: 'LIST' }],
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
                transformResponse: (response: RecipeResponse): Recipe[] =>
                    transformRecipeResponse(response.data),
            }),
            [EndpointNames.GET_RECIPE_BY_ID]: builder.query<Recipe, string>({
                query: (id) => ({
                    url: `${ApiEndpoints.RECIPE}${id}`,
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
                transformResponse: (response: RecipeResponse): Recipe[] =>
                    transformRecipeResponse(response.data),
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
} = recipeApiSlice;
