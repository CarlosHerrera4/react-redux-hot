import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Fire = props =>
  <section className={`${props.className} fire-container`}>
   Fire me!
   <hr />
    <span className='fire'>🔥</span>
    <button onClick={props.incrementCounter}>Increment</button>
    <button onClick={props.decreaseCounter}>Decrease</button>
  </section>;

const FireStyled = styled(Fire)`
  &.fire-container{
    .fire{
      font-size: ${props => `${props.counter * 16}px`};
    }
  }
`;

Fire.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default FireStyled;
