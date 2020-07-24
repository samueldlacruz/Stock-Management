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
import useStyles from './productForm.styles';
import { ProductModel } from './ProductModel';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const ProductEntrySchema = yup.object().shape({
 sku: yup.string().required('this is required'),
 name: yup.string().required('this is required'),
 photo: yup.mixed()
 .required('this is required uploading photo')
 .test("fileSize", "the file is too large", (value: any) => {
   return value && value[0].size <= 2000000
 }),
 description: yup.string().max(55).required('this is required'),
 categoryId: yup.number().required('this is required'),
 units: yup.number().min(1).max(60).required('this is required') ,
 sellingPrice: yup.number().required('this is required') ,
 alertQuantity: yup.number().required('this is required') ,
 marginProfitability: yup.number().required('this is required')
});

const ProductForm: React.FC = () => {

    const classes = useStyles();

    const { register, handleSubmit, reset } = useForm<ProductModel>({
      resolver: yupResolver(ProductEntrySchema)
    });

    const onSubmit = (data: ProductModel): void => {
      const formData = new FormData();
      formData.append('photo', data.photo[0]);
      reset(data);
    };

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
                    <TextField
                    inputRef={register}
                    type="file"
                    id="photo"
                    name="photo"
                    label={<PhotoCamera />}
                    variant="outlined"
                    fullWidth
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
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="sku"
                    name="sku"
                    label="sku"
                    variant="outlined"
                    size="small"
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
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="categoryId"
                    name="categoryId"
                    label="categoryId"
                    type="number"
                    variant="outlined"
                    size="small"
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="units"
                    name="units"
                    label="units"
                    type="number"
                    variant="outlined"
                    size="small"
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="sellingPrice"
                    name="sellingPrice"
                    label="sellingPrice"
                    type="number"
                    variant="outlined"
                    size="small"
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="alertQuantity"
                    name="alertQuantity"
                    label="alertQuantity"
                    type="number"
                    variant="outlined"
                    size="small"
                    />                
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    inputRef={register}
                    id="marginProfitability"
                    name="marginProfitability"
                    label="marginProfitability"
                    type="number"
                    variant="outlined"
                    size="small"
                    />                
                </Grid>
                <Grid item xs={4}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                      CREATE PRODUCT
                    </Button>                    
                </Grid>
              </Grid>
            </form>
        </Paper>
     </Box>
    )
}

export default ProductForm;
