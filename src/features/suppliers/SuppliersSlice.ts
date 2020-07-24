import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SupplierModel } from './SupplierModel';
import { AppThunk } from '../../reducers';
import { getSuppliers } from '../../api/index';

const initialState: { suppliers: SupplierModel[]; isLaoding: boolean } = {
  suppliers: [],
  isLaoding: true
}

const slice = createSlice({
    name: "suppliers",
    initialState,
    reducers: {
        setSuppliers: (state, action: PayloadAction<SupplierModel[]>) => {
            state.suppliers = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
          state.isLaoding = action.payload;
        },
    }
})

export default slice.reducer;

const { setSuppliers, setIsLoading } = slice.actions;

export const fecthSuppliers = (): AppThunk => async (dispatch) => {
  const suppliers = await getSuppliers();
  dispatch(setSuppliers(suppliers))
  dispatch(setIsLoading(false))
}