import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const DashboardPage: React.FC<{}> = () => {
    const classes = useStyles();
    
    return (
        <Container component="main" maxWidth="md" className={classes.container}>
         <CssBaseline />
         <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
         >
          <Typography className={classes.Typography} align="center" variant="h4" gutterBottom>
            BIENVENIDO AL SISTEMA DE INVENTARIO DE LA SURTIDORA DIOS ES MI GUIA
          </Typography> 
         </Box>
        </Container>
    )
}

export default DashboardPage;
