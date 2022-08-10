import React, {useState, useEffect} from 'react';
import axios from 'axios';
import img from './ImageURLs.js';
import styled, {keyframes} from 'styled-components';

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <IconContainer>
        <Icon src={img.poffin} onClick={(e) => {props.setView('Poffin House')}}></Icon>
        <Icon src={img.gym} onClick={(e) => {props.setView('Gym')}}></Icon>
        <Icon src={img.pkmncenter} onClick={(e) => {props.setView('Pokemon Center')}}></Icon>
      </IconContainer>
    </HomePageContainer>
  )
};

export default HomePage;

// styled components
const HomePageContainer = styled.div`
  background-image: url(${img.background});
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 50%;
  height: auto;
  align-self: center;
  &:hover {
    cursor: pointer;
  };
`;


const shake = keyframes`{
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}`;