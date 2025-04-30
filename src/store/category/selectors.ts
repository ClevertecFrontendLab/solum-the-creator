import { createSelector } from '@reduxjs/toolkit';

import { Category, SidebarCategory } from '~/types/category';

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

export const selectCategoryBySlug = (slug: string) =>
    createSelector([selectAllCategories], (categories) =>
        categories.find((category) => category.category === slug),
    );

export const selectFlatSubCategories = createSelector(selectAllCategories, (categories) =>
    categories.flatMap((cat) => cat.subCategories),
);

export const selectCategoryBySubCategoryId = (subCategoryId: string) =>
    createSelector([selectFlatSubCategories, (_: ApplicationState) => _], (flatSubs, state) => {
        const sub = flatSubs.find((s) => s._id === subCategoryId);
        if (!sub) return undefined;
        return selectCategoryById(state, sub.rootCategoryId);
    });

export const selectSubCategoriesByIds = (subIds: string[]) =>
    createSelector([selectFlatSubCategories], (flatSubs) =>
        flatSubs.filter((s) => subIds.includes(s._id)),
    );

export const selectSubCategoryById = (subId: string) =>
    createSelector([selectFlatSubCategories], (flatSubs) => flatSubs.find((s) => s._id === subId));

export const selectParentCategoriesBySubIds = (subIds: string[]) =>
    createSelector([selectFlatSubCategories, (_: ApplicationState) => _], (flatSubs, state) => {
        const parentsMap = new Map<string, Category>();
        for (const subId of subIds) {
            const sub = flatSubs.find((s) => s._id === subId);
            if (sub) {
                const parent = selectCategoryById(state, sub.rootCategoryId);
                if (parent) parentsMap.set(parent._id, parent);
            }
        }
        return Array.from(parentsMap.values());
    });
