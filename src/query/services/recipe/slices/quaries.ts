import { ApiEndpoints } from '~/query/constants/api';
import { ApiGroupNames } from '~/query/constants/api-group-names';
import { EndpointNames } from '~/query/constants/endpoint-names';
import { Tags } from '~/query/constants/tags';
import { apiSlice } from '~/query/create-api';
import { Recipe } from '~/types/recipe';
import { getValuable } from '~/utils/get-valuable-obj';
import { transformRecipeResponse } from '~/utils/image';

import { FilterParams, RecipeResponse, RecipesInitialPageParam, SortParams } from '../types';
import {
    providesInfiniteRecipes,
    providesInfiniteWrapperRecipes,
    providesRecipeList,
} from '../utils/tags';

export const recipeApiQuaries = apiSlice
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
                providesTags: providesRecipeList,
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
} = recipeApiQuaries;
