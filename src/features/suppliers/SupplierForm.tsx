import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Notify from '../../components/Notify';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import useStyles from './supplierForm.styles';
import { SupplierModel } from './Supplier.type';
import { useStores } from '../../store/StoresProvider';

const SupplierEntrySchema = yup.object().shape({
 name: yup.string().required('this is required'),
 phone: yup.number().required('this is required'),
 email: yup.string().max(55).required('this is required'),
});

const SupplierForm: React.FC = () => {
    const { suppliersStore } = useStores();

    const classes = useStyles();

    const { register, handleSubmit, reset, errors } = useForm<SupplierModel>({
      resolver: yupResolver(SupplierEntrySchema)
    });

    const [openNotify, setOpenNotify] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenNotify(false);
    };

    const onSubmit = (data: SupplierModel): void => {
     suppliersStore.addSupplier(data);
     
     setOpenNotify(true);

      reset({
        name: '',
        phone: undefined,
        email: ''
      });
    };

    return (
      <Box  
       display="flex" 
       justifyContent="center" 
       alignItems="center">
        <Paper className={classes.paper} variant="outlined">
            <Typography variant="subtitle1" gutterBottom>
                create supplier
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
             <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                    <TextField
                    inputRef={register}
                    id="name"
                    name="name"
                    label="name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={ errors.name ? true : false }
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
                      CREATE SUPPLIER
                    </Button>                    
                </Grid>
              </Grid>
            </form>
        </Paper>
        <Snackbar 
         anchorOrigin={{vertical:'bottom', horizontal: 'right'}}
         open={openNotify} 
         autoHideDuration={3000} 
         onClose={handleClose}>
          <Notify 
          title="nueva supplier" 
          content="se agrego un nuevo supplier"
          type="success"/>
        </Snackbar>
     </Box>
    )
}

export default SupplierForm;
