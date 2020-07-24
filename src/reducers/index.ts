import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import categories from '../features/categories/CategoriesSlice';
import suppliers from '../features/suppliers/SuppliersSlice';

export const store = configureStore({reducer: combineReducers({
    categories,
    suppliers
})})


export type RootState = {
    categories: ReturnType<typeof categories>;
    suppliers: ReturnType<typeof suppliers>;
};

export type AppThunk  = ThunkAction<void, RootState, unknown, Action<string>>