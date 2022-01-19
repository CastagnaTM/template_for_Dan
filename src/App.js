import React, {Component} from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
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
            <Route path='/packages' exact component={Packages} packageOne={this.PACKAGE_ONE_IMAGES}/>
            <Route path='/contact' exact component={ContactForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
