import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import UserIcon from '@material-ui/icons/People';
import EmployeeForm from '../features/employees/EmployeeForm';
import EmployeesList from '../features/employees/EmployeesList';
import useStyles from './styles';

const EmployeePage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.container}>
         <CssBaseline />
          <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
           <UserIcon fontSize="large" className={classes.titleIcon}/>  Empleados
          </Typography> 
          <EmployeeForm />
          <EmployeesList/>
        </Container>
    )
}

export default EmployeePage;
