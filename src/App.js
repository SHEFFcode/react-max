import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { name: 'Jeremy', age: 29 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 26 },
      ]
    }
  }

  onSwitchName() {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 27 },]
    })
  }

  render() {
    return (
      <div className="App">
        <div> Hi I'm a react app</div>
        <button onClick={this.onSwitchName.bind(this)}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies are wrestling</Person>
      </div>
    );
  }
}

export default App;
