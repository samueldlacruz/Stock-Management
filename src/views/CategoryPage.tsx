import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Label from '@material-ui/icons/Label';
import CategoryForm from '../components/CategoryForm';
import CategoriesList from '../components/CategoriesList';

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    Typography: {
        marginBottom: theme.spacing(3)
    },
    titleIcon: {
      position: 'relative',
      top: theme.spacing(1)
    }
}));

const CategoryPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.container}>
         <CssBaseline />
          <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
           <Label fontSize="large" className={classes.titleIcon}/>  Category 
          </Typography> 
          <CategoryForm></CategoryForm>
          <CategoriesList></CategoriesList>
        </Container>
    )
}

export default CategoryPage;
