import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Title>HOENN YOURSELF</Title>
      <WidgetContainers>
        <Widget onClick={(e) => {props.setView('Home Page')}}>  Home Page</Widget>
        <Widget onClick={(e) => {props.setView('Gym')}}>Gym</Widget>
        <Widget onClick={(e) => {props.setView('Poffin House')}}>Poffin House</Widget>
        <Widget onClick={(e) => {props.setView('Pokemon Center')}}>Pokemon Center</Widget>
      </WidgetContainers>
    </NavbarContainer>
  )
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid;
`;

const Title = styled.p`
  display: flex;
  align-self: flex-start;
  margin: 0px 0px 20px;
`;

const WidgetContainers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 0;
`;

const Widget = styled.div`
  margin: 0 5px 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  };
`;
