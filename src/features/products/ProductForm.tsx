import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MenuItem } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import useStyles from './productForm.styles';
import { NewProductModel } from './Product.type';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import { getCategories } from '../../api/categories';
import { CategoryModel } from '../../features/categories/CategoryModel';

const ProductEntrySchema = yup.object().shape({
  sku: yup.string().required('this is required'),
  categoryId: yup.number().required('this is required'),
  name: yup.string().required('this is required'),
  description: yup.string().max(55).required('this is required'),
  units: yup.number().required('this is required'),
  sellingPrice: yup.number().required('this is required')
 });

const ProductForm: React.FC = () => {
    const classes = useStyles();

    const { productsStore: { addProduct } } = useStores();

    const [categories, setCategories] = useState<CategoryModel[]>([])

    const getCategoryAll = async () => {
        const response: CategoryModel[] = await getCategories();
        await setCategories(response);
    }

    useEffect(() => {
       getCategoryAll();
    }, [])

    const { register, handleSubmit, reset, control, errors } = useForm<NewProductModel>({
      resolver: yupResolver(ProductEntrySchema)
    });

    const onSubmit = async (data: NewProductModel) => {
       addProduct(data);

       reset({
         sku:'',
         name: '',
         description: '',
         units: undefined,
         sellingPrice: undefined
       });
    }

    return useObserver(() => {
    return (
      <Box  
       display="flex" 
       justifyContent="center" 
       alignItems="center">
        <Paper className={classes.paper} variant="outlined">
            <Typography variant="subtitle1" gutterBottom>
                create product
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid container className={classes.root} spacing={2}>
             <Grid item xs={12}>
                <Button
                variant="contained"
                color="primary"
                component="label"
                >
                <PhotoCameraIcon />
                <TextField
                    type="file"
                    variant="standard"
                    inputRef={register}
                    id="image"
                    name="image"
                    fullWidth
                />
                </Button>
             </Grid>
              <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="sku"
                    name="sku"
                    label="SKU product"
                    variant="outlined"
                    size="small"
                    />                      
                  </Grid>
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
                  <Controller
                  as={
                    <TextField variant="outlined" select size="small">
                     {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                        {category.name}
                        </MenuItem>
                     ))}
                    </TextField>                      
                  }
                  name="categoryId"
                  control={control}
                  defaultValue={1}>
                  </Controller>
                  </Grid>
                  <Grid item xs={4}>
                  <TextField
                    inputRef={register}
                    id="units"
                    name="units"
                    label="units"
                    variant="outlined"
                    type="number"
                    size="small"
                    error={ errors.units ? true : false }
                    />                      
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="sellingPrice"
                    name="sellingPrice"
                    label="Selling Price"
                    variant="outlined"
                    type="number"
                    size="small"
                    error={ errors.sellingPrice ? true : false }
                    />                      
                  </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                      CREATE PRODUCT
                    </Button>                    
                </Grid>
            </Grid>
            </form>
        </Paper>
     </Box>
    )
   });
}

export default ProductForm;
