import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fireImg from '../../../assets/Fire_emoji.png';

const Fire = props =>
  <section className={`${props.className} fire-container`}>
    <section className='image-container'>
      <img src={fireImg} alt='fire emoji' />
    </section>
    <section className='action-buttons'>
      <button onClick={props.incrementFire}>Increment</button>
      <button onClick={props.decreaseFire}>Decrease</button>
    </section>
  </section>;

const FireStyled = styled(Fire)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-container{
    height: calc(100vh - 64px - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: ${props => `scale(${1 + props.fire})`};
      transition: all ease-in-out 0.1s;
    }
  }
  .action-buttons{
    z-index: 1;
    height: 80px;
    button {
      padding: 8px 32px;
      margin: 0 16px;
      background: white;
      border: 1px solid black;
      border-radius: 2px; 
      &:hover{
        cursor: pointer;
        color: #a9a9a9;
        border-color: #a9a9a9;
      }
    }
  }
`;

Fire.propTypes = {
  incrementFire: PropTypes.func.isRequired,
  decreaseFire: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default FireStyled;
