import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryModel} from '../interfaces/CategoryModel';
import { AppThunk } from './store';
import { getCategories, addCategory, deleteCategory } from '../services/categories';

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
        save: (state, action: PayloadAction<CategoryModel>) => {
          state.categories.push(action.payload);
        }, 
        remove: (state, action: PayloadAction<number | undefined>) => {
        state.categories = state.categories.filter(category => category.id !== action.payload)
        }, 
    }
})

export default slice.reducer;

const { setCategories, setIsLoading, save, remove } = slice.actions;

export const fecthCategories = (): AppThunk => async (dispatch) => {
  const categories = await getCategories();
  dispatch(setCategories(categories))
  dispatch(setIsLoading(false))
}

export const submitCategory = (name: string, description: string): AppThunk => async (dispatch) => {
  const category = { name, description };
  dispatch(save(category));
  addCategory(category);
}

export const removeCategory = (id: number | undefined): AppThunk => async (dispatch) => {
  dispatch(remove(id));
  deleteCategory(id);
}