import { useGetCategoriesQuery } from '~/query/services/category';

export const usePrefetchCategories = () => {
    useGetCategoriesQuery();
};
