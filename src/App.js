import React, {Component} from 'react';
import './App.css';
import OldContact from './Components/ContactForm';
import Creations from './Components/Creations';
import Home from './Components/Home';
import Packages from './Components/Packages'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  
  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/creations' exact component={Creations} />
            <Route path='/packages' exact component={Packages} />
            <Route path='/contact' exact component={OldContact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
