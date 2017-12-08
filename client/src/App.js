// import from modules
import React, { Component } from 'react';
import { Router, Route, withRouter } from 'react-router';

// import from services
import history from './services/history';

// import from components
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import GetStarted from './GetStarted';

const LocatedNavBar = withRouter(NavBar);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <LocatedNavBar />
          <Route exact path="/" component={Landing} />
          <Route path="/getstarted" component={GetStarted} />
          <Route path="/dashboard" component={Dashboard} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
