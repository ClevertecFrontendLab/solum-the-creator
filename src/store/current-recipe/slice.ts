import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe, recipeApiSlice } from '~/query/services/recipe';

type CurrentRecipeState = {
    recipe: Recipe | null;
};

const initialState: CurrentRecipeState = {
    recipe: null,
};

export const currentRecipeSlice = createSlice({
    name: 'currentRecipe',
    initialState,
    reducers: {
        setCurrentRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipe = action.payload;
        },
        clearCurrentRecipe: (state) => {
            state.recipe = null;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            recipeApiSlice.endpoints.getRecipeById.matchFulfilled,
            (state, action: PayloadAction<Recipe>) => {
                state.recipe = action.payload;
            },
        );
        builder.addMatcher(recipeApiSlice.endpoints.getRecipeById.matchPending, (state) => {
            state.recipe = null;
        });
    },
});

export const { setCurrentRecipe, clearCurrentRecipe } = currentRecipeSlice.actions;

export default currentRecipeSlice.reducer;
