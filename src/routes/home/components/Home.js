import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Home = props =>
  <section className={`${props.className} home-route`}>
    <h1>Welcome to react-redux-bones</h1>
    <h2>🤘🏻</h2>
  </section>;

const HomeStyled = styled(Home)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 50px;
  }
`;
Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default HomeStyled;
