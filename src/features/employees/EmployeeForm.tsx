import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import Snackbar from '@material-ui/core/Snackbar';
import Notify from '../../components/Notify';
import useStyles from './employeeForm.styles';
import { EmployeeModal } from './Employee.type';
import { useStores } from '../../store/StoresProvider';

const EmployeeEntrySchema = yup.object().shape({
 name: yup.string().required('this is required'),
 phone: yup.string().max(55).required('this is required'),
 email: yup.string().max(55).required('this is required'),
 lastname: yup.string().required('this is required')
});

const EmployeeForm: React.FC = () => {
    const { employeesStore } = useStores();

    const classes = useStyles();

    const { register, handleSubmit, reset, errors } = useForm<EmployeeModal>({
      resolver: yupResolver(EmployeeEntrySchema)
    });

    const [openNotify, setOpenNotify] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenNotify(false);
    };

    const onSubmit = (data: EmployeeModal): void => {
      employeesStore.addEmployee(data);

      setOpenNotify(true);
      reset({
        name: '',
        lastname: '',
        email: '',
        phone: ''
      });
    };

    return (
      <Box  
       display="flex" 
       justifyContent="center" 
       alignItems="center">
        <Paper className={classes.paper} variant="outlined">
            <Typography variant="subtitle1" gutterBottom>
                create employee
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
             <Grid container className={classes.root} spacing={2}>
              <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="name"
                    name="name"
                    label="name"
                    variant="outlined"
                    size="small"
                    error={ errors.name ? true : false }
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="lastname"
                    name="lastname"
                    label="lastname"
                    variant="outlined"
                    size="small"
                    error={ errors.lastname ? true : false }
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    type="tel"
                    id="phone"
                    name="phone"
                    label="phone"
                    variant="outlined"
                    size="small"
                    error={ errors.phone ? true : false }
                    />                
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    variant="outlined"
                    size="small"
                    error={ errors.email ? true : false }
                    />                
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                      CREATE EMPLOYEE
                    </Button>                    
                </Grid>
              </Grid>
            </form>
        </Paper>
        <Snackbar 
         anchorOrigin={{vertical:'bottom',horizontal: 'right'}}
         open={openNotify} 
         autoHideDuration={6000} 
         onClose={handleClose}>
          <Notify 
          title="nueva empleado" 
          content="se agrego una empleado"
          type="success"/>
        </Snackbar>
     </Box>
    )
}

export default EmployeeForm;
