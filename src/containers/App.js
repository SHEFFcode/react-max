import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import './App.css';
import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { name: 'Jeremy', age: 29 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 26 },
      ],
      showPersons: false
    }
  }

  onNameChange(id, event) {
    const person = this.state.persons[id];

    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 28 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  onTogglePersons(event) {
    this.setState({ showPersons: !this.state.showPersons });
  }

  onDeletePerson(personIndex, e) {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                click={this.onDeletePerson.bind(this, index)}
                changed={this.onNameChange.bind(this, index)}
              />
            )
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <div className={classes.join(' ')}> Hi I'm a react app</div>
          <button style={style} onClick={this.onTogglePersons.bind(this)}>Switch name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
