import React, {useState, useEffect} from 'react';
import axios from 'axios';
import img from '../HomePage/ImageURLs.js';
import styled from 'styled-components';
const Badges = (props) => {
  return (
    <BadgeContainer>
      <img src={img.stone}></img>
      {props.dayOfWk[0] ? <img src={img.knuckle}/> : <Grayscale src={img.knuckle}/>}
      {props.dayOfWk[1] ? <img src={img.dynamo}/> : <Grayscale src={img.dynamo}/>}
      {props.dayOfWk[2] ? <img src={img.heat}/> : <Grayscale src={img.heat}/>}
      {props.dayOfWk[3] ? <img src={img.balance}/> : <Grayscale src={img.balance}/>}
      {props.dayOfWk[4] ? <img src={img.feather}/> : <Grayscale src={img.feather}/>}
      {props.dayOfWk[5] ? <img src={img.mind}/> : <Grayscale src={img.mind}/>}
      {props.dayOfWk[6] ? <img src={img.rain}/> : <Grayscale src={img.rain}/>}
    </BadgeContainer>
  )
};

export default Badges;

// styled component
const Grayscale = styled.img`
  filter: grayscale(1);
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;