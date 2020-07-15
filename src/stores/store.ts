import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import categories from './CategoriesSlice';

export const store = configureStore({reducer: combineReducers({
    categories
})})


export type RootState = {
    categories: ReturnType<typeof categories>;
};

export type AppThunk  = ThunkAction<void, RootState, unknown, Action<string>>