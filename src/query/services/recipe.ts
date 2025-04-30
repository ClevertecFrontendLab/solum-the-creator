import { Ingredient, NutritionValue, RecipeStep } from '~/constants/data/recipes';
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
                    params: { limit, page: 1, sortBy: 'likes', sortOrder: 'desc' },
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
        }),
        overrideExisting: false,
    });

export const { useGetRecipesQuery, useLazyGetRecipesQuery, useGetJuiciestRecipesQuery } =
    recipeApiSlice;
