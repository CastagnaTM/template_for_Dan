import React, {Component} from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Designs from './Components/Designs';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  // This will hold state, holding which component is in view. I don't think any other component needs state for this app. It's super simple
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/designs' component={Designs} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
