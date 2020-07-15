import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MemoryRouter as Router, Route, Switch }from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CategoryPage from './views/CategoryPage';

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
            <Route path="/" exact component={dashboard}/>
            <Route path="/product" component={product}/>
            <Route path="/category" component={CategoryPage}/>
          </Switch>
        </Container>
      </main>
    </div>
    </Router>
  );
}

const product: React.FC = () => <h1>product</h1>;
const dashboard: React.FC = () => <h1>dashboard</h1>;

export default App;