import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navbar = props =>
  <ul className={`${props.className} navbar`}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/fire'>Fire</Link></li>
  </ul>;

const NavbarStyled = styled(Navbar)`
  height: 64px;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  border-bottom: 1px solid black;
  a {
    color: black;
    display: inline-block;
    padding: 16px 32px;
    text-decoration: none;
    &:hover{
      color: #B9B9B9;
    }
  }
`;

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavbarStyled;
