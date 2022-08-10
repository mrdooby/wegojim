import React, {useState, useEffect} from 'react';
import axios from 'axios';
import img from './ImageURLs.js';
import styled from 'styled-components';

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <IconContainer>
          <PoffinHouse src={img.poffin} onClick={(e) => {props.setView('Poffin House')}}></PoffinHouse>
        <Gym src={img.gym} onClick={(e) => {props.setView('Gym')}}></Gym>
        <PokemonCenter src={img.pkmncenter} onClick={(e) => {props.setView('Pokemon Center')}}></PokemonCenter>
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

const PoffinHouse = styled.img`
  width: 50%;
  height: auto;
  align-self: center;
`;

const Gym = styled.img`
  width: 50%;
  height: auto;
  align-self: center;
`;

const PokemonCenter = styled.img`
  width: 50%;
  height: auto;
  align-self: center;
`;
