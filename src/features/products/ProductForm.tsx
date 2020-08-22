import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MenuItem, Snackbar } from '@material-ui/core';
import InputUploadImage from '../../components/InputUploadImage';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import useStyles from './productForm.styles';
import { NewProductModel } from './Product.types';
import { useObserver } from 'mobx-react-lite';
import Notify from '../../components/Notify';
import { useStores } from '../../store/StoresProvider';
import { getCategories } from '../../api/categories';
import { CategoryModel } from '../../features/categories/CategoryModel';

const ProductEntrySchema = yup.object().shape({
  sku: yup.string().required('this is required'),
  categoryId: yup.number().required('this is required'),
  name: yup.string().required('this is required'),
  description: yup.string().max(55).required('this is required'),
  units: yup.number().required('this is required'),
  quantity: yup.number().required('this is required'),
  sellingPrice: yup.number().required('this is required'),
  image: yup.mixed().required('necesita poner una foto')
  .test('fileSize', 'el archivo es muy pesado', (value) => {
    return value && value[0].size <= 2000000;
  })
});

const ProductForm: React.FC = () => {
    const classes = useStyles();

    const { productsStore: { addProduct } } = useStores();

    const [openNotify, setOpenNotify] = React.useState(false);
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
       
       setOpenNotify(true);
       
       reset({
         sku:'',
         name: '',
         description: '',
         units: undefined,
         sellingPrice: undefined,
         image: ''
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
                Crear Productos
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid container className={classes.root} spacing={2}>
             <Grid item xs={12}>
               <InputUploadImage register={register} />
             </Grid>
              <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="sku"
                    name="sku"
                    label="Codigo de barras"
                    variant="outlined"
                    size="small"
                    fullWidth
                    />                      
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                    inputRef={register}
                    id="name"
                    name="name"
                    label="nombre"
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
                    label="descripcion"
                    variant="outlined"
                    size="small"
                    error={ errors.description ? true : false }
                    />                      
                  </Grid>
                  <Grid item xs={4}>
                  <Controller
                  as={
                    <TextField variant="outlined" select size="small">
                       <MenuItem value="default">
                         Categoria
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
                  defaultValue="default">
                  </Controller>
                  </Grid>
                  <Grid item xs={4}>
                  <TextField
                    inputRef={register}
                    id="units"
                    name="units"
                    label="unidades"
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
                    label="Precio de Venta"
                    variant="outlined"
                    type="number"
                    size="small"
                    error={ errors.sellingPrice ? true : false }
                    />                      
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="quantity"
                    name="quantity"
                    label="cantidad"
                    variant="outlined"
                    type="number"
                    size="small"
                    error={ errors.quantity ? true : false }
                    />                      
                  </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                      CREAR PRODUCTO
                    </Button>                    
                </Grid>
            </Grid>
            </form>
        </Paper>
        <Snackbar 
         anchorOrigin={{vertical:'bottom',horizontal: 'right'}}
         open={openNotify} 
         autoHideDuration={6000}>
          <Notify title="nueva producto" content="se agrego una producto" type="success"/>
        </Snackbar>
     </Box>
    )
   });
}

export default ProductForm;
