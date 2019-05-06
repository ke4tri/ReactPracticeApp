import React, {Component}from 'react';
// or if using the commented out below use
// import React from 'react';
import './App.css';
import Person from './Person/Person'
import Home from './Home/Home'
import Navbar from './NavBar/NavBar';

class App extends Component {
  state = {
  
     
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <Home />
  </div>
    );
  }
}


export default App;

