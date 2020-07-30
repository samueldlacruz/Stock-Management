import React from 'react';
import EditModal from '../../components/EditModal';
import { SupplierModel } from './Supplier.type';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './supplierForm.styles';
import { useStores } from '../../store/StoresProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

interface SupplierEditProps {
   open: boolean;
   handleClose: () => void;
   data: SupplierModel;
}

const SupplierEntrySchema = yup.object().shape({
    name: yup.string().required('this is required'),
    phone: yup.number().required('this is required'),
    email: yup.string().max(55).required('this is required'),
});

const SupplierEdit: React.FC<SupplierEditProps> = (props) => {
    const classes = useStyles();
   
    const { suppliersStore: { editSupplier, fetchsuppliers } } = useStores();

    const { register, handleSubmit, errors } = useForm<SupplierModel>({
        resolver: yupResolver(SupplierEntrySchema)
    });
    
    const onSubmit = (data: SupplierModel): void => {
        const upSupplier = {
            id: props.data.id,
            ...data
        }

        editSupplier(upSupplier); 
        fetchsuppliers();
    };

    return (
        <EditModal
         open={props.open}
         title="supplier edit"
         description={`edit supplier ${props.data.name}- ${props.data.id}`}
         onClose={props.handleClose}
         onAction={handleSubmit(onSubmit)}
        >
        <form className={classes.form} noValidate autoComplete="off">
             <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                    <TextField
                    inputRef={register}
                    id="name"
                    name="name"
                    label="name"
                    variant="outlined"
                    size="small"
                    defaultValue={props.data.name}
                    error={ errors.name ? true : false }
                    fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="phone"
                    name="phone"
                    label="phone"
                    type="number"
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

export default SupplierEdit;