import React, {useState, useEffect} from 'react';
import axios from 'axios';
import img from '../HomePage/ImageURLs.js';
import styled from 'styled-components';
const Badges = (props) => {
  return (
    <div>
      <img src={img.stone}></img>
      {props.dayOfWk.sun ? <img src={img.knuckle}/> : <Grayscale src={img.knuckle}/>}
      {props.dayOfWk.mon ? <img src={img.dynamo}/> : <Grayscale src={img.dynamo}/>}
      {props.dayOfWk.tues ? <img src={img.heat}/> : <Grayscale src={img.heat}/>}
      {props.dayOfWk.wed ? <img src={img.balance}/> : <Grayscale src={img.balance}/>}
      {props.dayOfWk.thurs ? <img src={img.feather}/> : <Grayscale src={img.feather}/>}
      {props.dayOfWk.fri ? <img src={img.mind}/> : <Grayscale src={img.mind}/>}
      {props.dayOfWk.sat ? <img src={img.rain}/> : <Grayscale src={img.rain}/>}
    </div>
  )
};

export default Badges;

// styled component
const Grayscale = styled.img`
  filter: grayscale(1);
`;