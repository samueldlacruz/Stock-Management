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
import { useDispatch } from 'react-redux';
import { submitCategory } from '../../store/CategoriesSlice';
import { CategoryModel } from '../../interfaces/CategoryModel';
import useStyles from './styles';

const CategoryEntrySchema = yup.object().shape({
 name: yup.string().required('this is required'),
 description: yup.string().max(55).required('this is required'),
});

const CategoryForm: React.FC = () => {
    const dispatch = useDispatch();
   
    const classes = useStyles();

    const { register, handleSubmit, reset, errors } = useForm<CategoryModel>({
      resolver: yupResolver(CategoryEntrySchema)
    });

    const onSubmit = (data: CategoryModel): void => {
      dispatch(submitCategory(data.name, data.description));
      reset({
        name: '',
        description: ''
      });
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
                    id="description"
                    name="description"
                    label="description"
                    variant="outlined"
                    size="small"
                    error={ errors.description ? true : false }
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
