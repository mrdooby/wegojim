import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <h1>HOENN YOURSELF</h1>
      <div onClick={(e) => {props.setView('Home Page')}}>Home Page</div>
      <div onClick={(e) => {props.setView('Gym')}}>Gym</div>
      <div onClick={(e) => {props.setView('Poffin House')}}>Poffin House</div>
      <div onClick={(e) => {props.setView('Pokemon Center')}}>Pokemon Center</div>
    </NavbarContainer>
  )
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
`