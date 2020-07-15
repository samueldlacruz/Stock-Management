import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryModel} from '../interfaces/CategoryModel';
import { AppThunk } from './store';
import { getCategories, addCategory } from '../api';

const initialState: { categories: CategoryModel[]; isLaoding: boolean } = {
  categories: [],
  isLaoding: true
}

const slice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<CategoryModel[]>) => {
            state.categories = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
          state.isLaoding = action.payload;
        },
        saveCategory: (state, action: PayloadAction<CategoryModel>) => {
          state.categories.push(action.payload);
        }, 
        removeCategory: (state, action: PayloadAction<string>) => {
         state.categories.map(category => category.name != action.payload)
        }, 
    }
})

export default slice.reducer;

const { setCategories, setIsLoading, saveCategory, removeCategory } = slice.actions;

export const fecthCategories = (): AppThunk => async (dispatch) => {
  const categories = await getCategories();
  dispatch(setCategories(categories))
  dispatch(setIsLoading(false))
}

export const submitCategory = (name: string, description: string): AppThunk => async (dispatch) => {
  const category = { name, description };
  dispatch(saveCategory(category));
  addCategory();
}

export const deleteCategory = (name: string): AppThunk => async (dispatch) => {
  dispatch(removeCategory(name));
  console.log(name);
}