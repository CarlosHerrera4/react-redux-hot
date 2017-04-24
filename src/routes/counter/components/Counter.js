import React from 'react';
import PropTypes from 'prop-types';

const Counter = props =>
  <div>
   Hello counter route! 😎
   <hr />
    <span>{props.counter}</span>
    <button onClick={props.incrementCounter}>Increment</button>
    <button onClick={props.decreaseCounter}>Decrease</button>
  </div>;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
};

export default Counter;
