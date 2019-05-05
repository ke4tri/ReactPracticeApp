import React, {Component}from 'react';
// or if using the commented out below use
// import React from 'react';
import './App.css';
import Person from './Person/Person'
import Home from './Home/Home'
import Navbar from './NavBar/NavBar';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "JJ", age: 44},
      {name: "Stephanie", age: 23}
    ]
     
  }

  render() {
    return (
      <div className="App">
      <Navbar />
    {/* <h1>Hello World</h1>
    <p>I didn't think about it, but this is working!</p> */}
    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    <Person name="JJ" age="44"/>
    <Person name="Stephanie" age="23">My Hobbies: Racing</Person> */}
    <Home />
  </div>
    );
  }
}

// function App() {
  
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>I didn't think about it, but this is working!</p>
//       <button>Switch Name</button>
//       <Person name="Max" age="28" />
//       <Person name="JJ" age="44"/>
//       <Person name="Stephanie" age="23">My Hobbies: Racing</Person>
//     </div>
//   );
// }

export default App;

