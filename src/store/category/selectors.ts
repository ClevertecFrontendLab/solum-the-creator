import { createSelector } from '@reduxjs/toolkit';

import { SidebarCategory } from '~/types/category';

import { ApplicationState } from '../configure-store';
import { categoriesAdapter } from './slice';

export const {
    selectAll: selectAllCategories,
    selectById: selectCategoryById,
    selectIds: selectCategoryIds,
} = categoriesAdapter.getSelectors<ApplicationState>((state) => state.categories);

export const selectSidebarCategories = createSelector(
    [selectAllCategories],
    (categories): SidebarCategory[] =>
        categories.map(({ _id, title, subCategories, icon, category }) => ({
            _id,
            title,
            category,
            icon,
            subCategories,
        })),
);
