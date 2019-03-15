import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.scss';
import Routes from './util/routes'
import Navigation from './components/navigation/Navigation'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>

          <Route path={Routes.Home} exact component={Home}/>
          <Route path={Routes.Contact} component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
