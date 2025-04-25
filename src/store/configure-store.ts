import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import allergenFilterReducer from './allergen-filter/slice';
import appReducer, { appSlice } from './app-slice';
import recipeFilterReducer from './recipe-filter/slice';
import searchReducer from './search/slice';

const isProduction = false;

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    allergenFilter: allergenFilterReducer,
    recipeFilter: recipeFilterReducer,
    search: searchReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
