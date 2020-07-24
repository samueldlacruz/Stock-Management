import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MemoryRouter as Router, Route, Switch }from 'react-router-dom';
import Navbar from './Navbar';
import CategoryPage from '../screens/CategoryPage';
import SupplierPage from '../screens/SupplierPage';
import ProductPage from '../screens/ProductPage';
import EmployeePage from '../screens/EmployeePage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: {
    margin: '2em'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <Navbar></Navbar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="/product" component={ProductPage}/>
            <Route path="/category" component={CategoryPage}/>
            <Route path="/supplier" component={SupplierPage}/>
            <Route path="/employee" component={EmployeePage}/>
          </Switch>
        </Container>
      </main>
    </div>
    </Router>
  );
}

export default App;