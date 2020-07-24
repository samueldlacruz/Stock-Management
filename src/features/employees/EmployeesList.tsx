import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import  EmployeeCard from './EmployeeCard';
import  ListContainer from '../../components/List';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { fecthEmployees } from './EmployeesSlice';

const EmployeesList = () => {
 
    const dispatch = useDispatch();

    const { isLaoding, employees } = useSelector<RootState, RootState["employees"]>(state => state.employees);
    
    useEffect(() => {
      dispatch(fecthEmployees())
    }, [])

    if (isLaoding) {
      return <Typography variant="h5" color="primary">Loading...</Typography>
    }

    return (
    <ListContainer title="employees">
    {employees.map((employee, index: number) => (
        <EmployeeCard 
        key={`id-${index}`} 
        {...employee} />
    ))}
    </ListContainer>
    )
}

export default EmployeesList;