import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let classes = [];

  if (props.persons.length <= 2) {
    classes.push('red');
  }

  if (props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <div className={classes.join(' ')}> Hi I'm a react app</div>
      <button style={style} onClick={this.onTogglePersons.bind(this)}>Switch name</button>
      {persons}
    </div>
  )
};

export default cockpit;