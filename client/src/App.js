import React, { Component } from 'react';
import { Router, Route, withRouter} from 'react-router';
import history from './services/history';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Landing from './Landing.js';
import Dashboard from './Dashboard.js';
import GetStarted from './GetStarted.js';

//Allows NavBar to access Location. Useful for Active class
const LocatedNavBar = withRouter(NavBar);

//The exact parameter in Route avoids that all routes starting with / are sent to Landing
class App extends Component {
  render() {
    return (
      <Router history={history}>
				<div className="container-fluid p-0">
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
