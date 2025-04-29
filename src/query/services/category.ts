import { Category, SubCategory } from '~/types/category';
import { getImgUrl } from '~/utils/image';

import { ApiEndpoints } from '../constants/api';
import { ApiGroupNames } from '../constants/api-group-names';
import { EndpointNames } from '../constants/endpoint-names';
import { Tags } from '../constants/tags';
import { apiSlice } from '../create-api';

type RawCategory = Category & { rootCategoryId: undefined };

type RawSubCategory = SubCategory & { subCategories: undefined };

type RawItem = RawCategory | RawSubCategory;

export const categoriesApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.CATEGORY],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            [EndpointNames.GET_CATEGORY]: builder.query<Category[], void>({
                query: () => ({
                    url: ApiEndpoints.CATEGORY,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.CATEGORY,
                    name: EndpointNames.GET_CATEGORY,
                }),
                transformResponse: (raw: RawItem[]): Category[] => {
                    const roots = raw.filter(
                        (item): item is RawCategory => item.rootCategoryId === undefined,
                    );

                    return roots.map((item) => ({
                        ...item,
                        icon: getImgUrl(item.icon),
                    }));
                },
                providesTags: (result) =>
                    result
                        ? [
                              ...result.map(({ _id }) => ({
                                  type: Tags.CATEGORY as const,
                                  id: _id,
                              })),
                              { type: Tags.CATEGORY, id: 'LIST' },
                          ]
                        : [{ type: Tags.CATEGORY, id: 'LIST' }],
            }),
        }),
        overrideExisting: false,
    });

export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } = categoriesApiSlice;
