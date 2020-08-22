import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import  EmployeeCard from './EmployeeCard';
import  ListContainer from '../../components/List';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import 'mobx-react-lite/batchingForReactDom';

const EmployeesList = () => {
    const  { employeesStore } = useStores()

    const { fetchEmployees } = employeesStore;
 
    useEffect(() => {
     fetchEmployees();
    },[])

    return useObserver(() => {
      const { employees, isLoading } = employeesStore;

       if(isLoading) {
        return <Typography color="primary" variant="subtitle1">Loading ...</Typography>
       }

        return (
        <ListContainer title="empleados">
        {employees.map((employee, index: number) => (
            <EmployeeCard 
            key={`id-${index}`} 
            {...employee} />
        ))}
        </ListContainer>
        );
    });

}

export default EmployeesList;