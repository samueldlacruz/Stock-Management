import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MenuItem } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import useStyles from './productForm.styles';
import { ProductModel } from './Product.type';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import 'mobx-react-lite/batchingForReactDom';

const ProductEntrySchema = yup.object().shape({
  sku: yup.string().required('this is required'),
  categoryId: yup.number().required('this is required'),
  name: yup.string().required('this is required'),
  description: yup.string().required('this is required'),
  photoUri: yup.string().required('this is required'),
  alertQuantity: yup.number().required('this is required'),
  sellingPrice: yup.number().required('this is required'),
  marginProfitability: yup.number().required('this is required'),
  units: yup.number().required('this is required')
});

const ProductForm: React.FC = () => {
    const { productsStore, categoriesStore } = useStores();

    const classes = useStyles();

    const { register, handleSubmit, reset, control, errors } = useForm<ProductModel>({
      resolver: yupResolver(ProductEntrySchema)
    });

    const onSubmit = (data: ProductModel): void => {
      console.log(data);
      reset();
    };

    useEffect(() => {
      categoriesStore.fetchCategories();
    }, []);

    return useObserver(() => {
    const { categories } = categoriesStore;
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
             <Grid item>
                <Button
                variant="contained"
                color="primary"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    style={{ display: "none" }}
                />
                </Button>
             </Grid>
              <Grid item xs={12} sm  container>
              <Grid item xs container spacing={2}>
              <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="sku"
                    name="sku"
                    label="SKU product"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={ errors.sku ? true : false }
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
                    fullWidth
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
                    fullWidth
                    error={ errors.description ? true : false }
                    />                      
                  </Grid>
                  {/* <Grid item xs={4}>
                  <Controller
                  as={
                    <TextField variant="outlined" select size="small">
                      <MenuItem value={0}>
                        <em>category</em>
                      </MenuItem>
                     {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                        {category.name}
                        </MenuItem>
                     ))}
                    </TextField>                      
                  }
                  name="categoryId"
                  control={control}
                  defaultValue={0}>
                  </Controller>
                  </Grid> */}
                  <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="units"
                    name="units"
                    label="units"
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    error={ errors.units ? true : false }
                    />                      
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="alertQuantity"
                    name="alertQuantity"
                    label="Alert Quantity"
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    error={ errors.alertQuantity ? true : false }
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
                    fullWidth
                    error={ errors.sellingPrice ? true : false }
                    />                      
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="marginProfitability"
                    name="marginProfitability"
                    label="Margin Prof."
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={ errors.marginProfitability ? true : false }
                    />                      
                  </Grid>                 
                  </Grid>
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
