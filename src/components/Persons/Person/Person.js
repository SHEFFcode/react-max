import React from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    }
  }

  return (
    <div className="Person" onClick={props.click} style={style}>
      <p>I'm a person and I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Radium(person);