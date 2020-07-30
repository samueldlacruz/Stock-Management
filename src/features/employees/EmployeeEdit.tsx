import React from 'react';
import EditModal from '../../components/EditModal';
import { EmployeeModal } from './Employee.type';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './employeeForm.styles';
import { useStores } from '../../store/StoresProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

interface EmployeeEditProps {
   open: boolean;
   handleClose: () => void;
   data: EmployeeModal;
}

const EmployeeEntrySchema = yup.object().shape({
    name: yup.string().required('this is required'),
    phone: yup.number().required('this is required'),
    email: yup.string().max(55).required('this is required'),
    lastname: yup.string().required('this is required')
});

const EmployeeEdit: React.FC<EmployeeEditProps> = (props) => {
    const classes = useStyles();
   
    const { employeesStore: { editEmployee, fetchEmployees } } = useStores();

    const { register, handleSubmit, errors } = useForm<EmployeeModal>({
        resolver: yupResolver(EmployeeEntrySchema)
    });
    
    const onSubmit = (data: EmployeeModal): void => {
        const upSupplier = {
            id: props.data.id,
            ...data
        }

        editEmployee(upSupplier); 
        fetchEmployees();
    };

    return (
        <EditModal
         open={props.open}
         title="employee edit"
         description={`edit employee ${props.data.name}- ${props.data.id}`}
         onClose={props.handleClose}
         onAction={handleSubmit(onSubmit)}
        >
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
                defaultValue={props.data.name}
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
                defaultValue={props.data.lastname}
                error={ errors.lastname ? true : false }
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                inputRef={register}
                type="number"
                id="phone"
                name="phone"
                label="phone"
                variant="outlined"
                size="small"
                defaultValue={props.data.phone}
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
                defaultValue={props.data.email}
                error={ errors.email ? true : false }
                />                
            </Grid>
            </Grid>
        </form>
        </EditModal>
    );
}

export default EmployeeEdit;