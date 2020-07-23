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
import useStyles from './styles';
import { SupplierModel } from '../../interfaces/SupplierModel';

const SupplierEntrySchema = yup.object().shape({
 name: yup.string().required('this is required'),
 phone: yup.string().max(55).required('this is required'),
 email: yup.string().max(55).required('this is required'),
});

const SupplierForm: React.FC = () => {

    const classes = useStyles();

    const { register, handleSubmit, reset } = useForm<SupplierModel>({
      resolver: yupResolver(SupplierEntrySchema)
    });

    const onSubmit = (data: SupplierModel): void => {
      console.log(data);
      reset({
        name: '',
        phone: '',
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
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="phone"
                    name="phone"
                    label="phone"
                    type="tell"
                    variant="outlined"
                    size="small"
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
     </Box>
    )
}

export default SupplierForm;
