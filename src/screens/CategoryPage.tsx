import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LabelIcon from '@material-ui/icons/Label';
import CategoryForm from '../features/categories/CategoryForm';
import CategoriesList from '../features/categories/CategoriesList';
import useStyles from './styles';

const CategoryPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.container}>
         <CssBaseline />
          <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
           <LabelIcon fontSize="large" className={classes.titleIcon}/>  Category 
          </Typography> 
          <CategoryForm></CategoryForm>
          <CategoriesList></CategoriesList>
        </Container>
    )
}

export default CategoryPage;
