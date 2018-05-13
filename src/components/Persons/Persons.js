import React from 'react';

const persons = (props) => (
  props.persons.map((person, index) => (
    <Person
      name={person.name}
      age={person.age}
      key={index}
      click={this.onDeletePerson.bind(this, index)}
      changed={this.onNameChange.bind(this, index)}
    />
  ))
);