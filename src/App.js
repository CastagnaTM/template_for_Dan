import React, {Component} from 'react';
import './App.css';
import Contact from './Components/Contact';
import Creations from './Components/Creations';
import Home from './Components/Home';
import Packages from './Components/Packages'
// import Footer from './Components/Footer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  
  render() {

    return (
      <>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/creations' exact component={Creations} />
            <Route path='/packages' exact component={Packages} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </div>
      </Router>
      {/* <Footer /> */}
      </>
    );
  }
}

export default App;
