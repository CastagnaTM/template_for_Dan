import React, {Component} from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Designs from './Components/Designs';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Banner />
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
