import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navbar = props =>
  <ul className={`${props.className} navbar`}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/counter'>Counter</Link></li>
  </ul>;

const NavbarStyled = styled(Navbar)`
  display: flex;
  list-style: none;
  margin: 0;
  a {
    color: black;
    display: inline-block;
    padding: 8px 32px;
    text-decoration: none;
  }
`;

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavbarStyled;
