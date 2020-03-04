import React, {Component} from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Designs from './Components/Designs';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  // This will hold state, holding which component is in view. I don't think any other component needs state for this app. It's super simple
  
  componentDidMount = () => {
    window.addEventListener( 'scroll', () => {
      const isTop = window.scrollY < 100;
      const nav = document.getElementById('banner');
      if (isTop){
        // nav.classList.add('scrolled');
      } else {
        // nav.classList.remove('scrolled')

      }
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  
  
  render() {

    return (
      <Router>
        <div className="App">
          {/* <div className='banner'>
            <p>hey, this is a banner... </p>
          </div> */}
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
