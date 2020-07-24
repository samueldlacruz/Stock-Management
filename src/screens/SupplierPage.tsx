import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import useStyles from './styles';
import SupplierForm from '../features/suppliers/SupplierForm';
import SuppliersList from '../features/suppliers/SupplierList';

const SupplierPage: React.FC<{}> = () => {
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="md" className={classes.container}>
       <CssBaseline />
        <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
         <PeopleIcon fontSize="large" className={classes.titleIcon}/>  Supplier 
        </Typography> 
        <SupplierForm></SupplierForm>
        <SuppliersList></SuppliersList>
      </Container>
  )
}

export default SupplierPage;