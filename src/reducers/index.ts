import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import categories from '../features/categories/CategoriesSlice';
import suppliers from '../features/suppliers/SuppliersSlice';
import employees from '../features/employees/EmployeesSlice';

export const store = configureStore({reducer: combineReducers({
    categories,
    suppliers,
    employees
})})


export type RootState = {
    categories: ReturnType<typeof categories>;
    suppliers: ReturnType<typeof suppliers>;
    employees: ReturnType<typeof employees>;
};

export type AppThunk  = ThunkAction<void, RootState, unknown, Action<string>>