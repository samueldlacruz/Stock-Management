import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeModal } from './Employee.type';
import { AppThunk } from '../../reducers';
import { getEmployees } from '../../api/employees';

const initialState: { employees: EmployeeModal[]; isLaoding: boolean } = {
  employees: [],
  isLaoding: true
}

const slice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setSuppliers: (state, action: PayloadAction<EmployeeModal[]>) => {
            state.employees = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
          state.isLaoding = action.payload;
        },
    }
})

export default slice.reducer;

const { setSuppliers, setIsLoading } = slice.actions;

export const fecthEmployees = (): AppThunk => async (dispatch) => {
  const suppliers = await getEmployees();
  dispatch(setSuppliers(suppliers))
  dispatch(setIsLoading(false))
}