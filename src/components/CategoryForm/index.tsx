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
import CategoryModel from '../../interfaces/CategoryModel';
import useStyles from './styles';

const CategoryEntrySchema = yup.object().shape({
 name: yup.string().required('this is required'),
 description: yup.string().max(20).required('this is required'),
});

const CategoryForm: React.FC = () => {
    const classes = useStyles();

    const { register, handleSubmit, errors, reset } = useForm<CategoryModel>({
      resolver: yupResolver(CategoryEntrySchema)
    });

    const onSubmit = (data: CategoryModel): void => {
      console.log(data);
      reset();
    };

    return (
      <Box  
       display="flex" 
       justifyContent="center" 
       alignItems="center">
        <Paper className={classes.paper} variant="outlined">
            <Typography variant="subtitle1" gutterBottom>
                create category
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
             <Grid container className={classes.root} spacing={2}>
              <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="name"
                    name="name"
                    label="name"
                    variant="outlined"
                    size="small"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="description"
                    name="description"
                    label="description"
                    variant="outlined"
                    size="small"
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ''}
                    />                
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                      CREATE CATEGORY
                    </Button>                    
                </Grid>
              </Grid>
            </form>
        </Paper>
     </Box>
    )
}

export default CategoryForm;
