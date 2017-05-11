import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../components/Button';
import fireImg from '../../../assets/Fire_emoji.png';

const Fire = props =>
  <section className={`${props.className} fire-container`}>
    <section className='image-container'>
      <img src={fireImg} alt='fire emoji' />
    </section>
    <section className='action-buttons'>
      <Button onClick={props.incrementFire}>Increment</Button>
      <Button onClick={props.decreaseFire}>Decrease</Button>
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
  }
`;

Fire.propTypes = {
  incrementFire: PropTypes.func.isRequired,
  decreaseFire: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default FireStyled;
