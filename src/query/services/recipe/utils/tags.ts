import { Tags } from '~/query/constants/tags';

import { Recipe } from '../recipe';

export const providesRecipeList = (result?: Recipe[]) =>
    result
        ? [
              ...result.map(({ _id }) => ({ type: Tags.RECIPE as const, id: _id })),
              { type: Tags.RECIPE as const, id: 'LIST' },
          ]
        : [{ type: Tags.RECIPE as const, id: 'LIST' }];

export const providesTopRecipes = (result?: Recipe[]) =>
    result
        ? [
              ...result.map(({ _id }) => ({ type: Tags.RECIPE as const, id: _id })),
              { type: Tags.RECIPE as const, id: 'TOP' },
          ]
        : [{ type: Tags.RECIPE as const, id: 'TOP' }];

export const providesInfiniteRecipes = <T extends { _id: string }[]>(result?: { pages: T[] }) =>
    result
        ? [
              ...result.pages.flatMap((page) =>
                  page.map((r) => ({ type: Tags.RECIPE as const, id: r._id })),
              ),
              { type: Tags.RECIPE as const, id: 'LIST' },
          ]
        : [{ type: Tags.RECIPE as const, id: 'LIST' }];

export const providesInfiniteWrapperRecipes = <T extends { data: { _id: string }[] }>(result?: {
    pages: T[];
}) =>
    result
        ? [
              ...result.pages.flatMap((p) =>
                  p.data.map((r) => ({ type: Tags.RECIPE as const, id: r._id })),
              ),
              { type: Tags.RECIPE as const, id: 'LIST' },
          ]
        : [{ type: Tags.RECIPE as const, id: 'LIST' }];

export const invalidatesRecipe = (recipe?: Recipe) =>
    recipe
        ? [
              { type: Tags.RECIPE as const, id: 'LIST' },
              { type: Tags.RECIPE as const, id: recipe._id },
          ]
        : [{ type: Tags.RECIPE as const, id: 'LIST' }];

export const invalidatesById = (id: string) => [
    { type: Tags.RECIPE as const, id: 'LIST' },
    { type: Tags.RECIPE as const, id },
];
