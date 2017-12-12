// import from modules
import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
// import from services
import history from './services/history';

// import from components
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import GetStarted from './GetStarted';

const LocatedNavBar = withRouter(NavBar);

const AppRouter = () => (
  <Router history={history}>
    <div>
      <LocatedNavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/getstarted" component={GetStarted} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
