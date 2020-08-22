import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import ProductList from '../features/products/ProductList';
import ProductForm from '../features/products/ProductForm';

const CategoryPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.container}>
         <CssBaseline />
          <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
           <ShoppingCartIcon fontSize="large" className={classes.titleIcon}/>  Productos
          </Typography> 
          <ProductForm />
          <ProductList />
        </Container>
    )
}

export default CategoryPage;
