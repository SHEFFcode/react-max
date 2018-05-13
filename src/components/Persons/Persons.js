import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
  props.persons.map((person, index) => (
    <Person
      name={person.name}
      age={person.age}
      key={index}
      click={(e) => props.clicked(index, e)}
      changed={(e) => props.changed(index, e)}
    />
  ))
);

export default persons;