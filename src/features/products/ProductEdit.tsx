import React, { useEffect, useState } from 'react';
import EditModal from '../../components/EditModal';
import { ProductModel, NewProductModel } from './Product.types';
import { CategoryModel } from '../categories/CategoryModel';
import { Grid, Button, MenuItem, TextField } from '@material-ui/core';
import useStyles from './productForm.styles';
import { useStores } from '../../store/StoresProvider';
import { useObserver } from 'mobx-react-lite';
import { getCategories } from '../../api/categories';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

interface ProductEditProps {
    open: boolean;
    handleClose: () => void;
    data: ProductModel;
}

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


const ProductEdit: React.FC<ProductEditProps> = (props) => {
    const classes = useStyles();
   
    const { productsStore: { editProduct, fetchProducts } } = useStores();

    const { register, handleSubmit, reset, errors, control } = useForm<NewProductModel>({
        resolver: yupResolver(ProductEntrySchema)
    });

    const [categories, setCategories] = useState<CategoryModel[]>([])

    const getCategoryAll = async () => {
        const response: CategoryModel[] = await getCategories();
        await setCategories(response);
    }

    useEffect(() => {
       getCategoryAll();
    }, [])

    
    const onSubmit = (data: NewProductModel) => {
        const upProduct = {
            sku: data.sku,
            categoryId: data.categoryId,
            name: data.name,
            description: data.description,
            photoUri: props.data.photoUri,
            alertQuantity: props.data.alertQuantity, 
            sellingPrice: data.sellingPrice,
            units: data.units,
            createdDate: props.data.createdDate,
            updated: props.data.updated,
            quantity: data.quantity
        }
        
        console.log(upProduct);
        editProduct(upProduct); 
        fetchProducts();

        reset({
            sku:'',
            name: '',
            description: '',
            units: undefined,
            sellingPrice: undefined,
            image: ''
          });
    };

    return useObserver(() => {
    return (
        <EditModal
         open={props.open}
         title="category edit"
         description={`edit category ${props.data.name}- ${props.data.sku}`}
         onClose={props.handleClose}
         onAction={handleSubmit(onSubmit)}
        >
        <form className={classes.form} noValidate autoComplete="off">
         <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
             <img 
             src={props.data.photoUri} 
             style={{borderRadius: '50%'}} 
             width="70" 
             height="70"
             alt={props.data.name}/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                inputRef={register}
                id="sku"
                name="sku"
                label="SKU product"
                defaultValue={props.data.sku}
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
                label="name"
                defaultValue={props.data.name}
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
                defaultValue={props.data.description}
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
                defaultValue={props.data.categoryId}>
                </Controller>
                </Grid>
                <Grid item xs={4}>
                <TextField
                inputRef={register}
                id="units"
                name="units"
                label="units"
                variant="outlined"
                defaultValue={props.data.units}
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
                defaultValue={props.data.sellingPrice}
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
                label="Quantity"
                defaultValue={props.data.quantity}
                variant="outlined"
                type="number"
                size="small"
                error={ errors.quantity ? true : false }
                />                      
                </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth color="primary">
                    CREATE PRODUCT
                </Button>                    
            </Grid>
         </Grid>
        </form>
        </EditModal>
    );
  });
}

export default ProductEdit;