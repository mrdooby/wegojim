import React from 'react';
import axios from 'axios';

const Navbar = (props) => {
  return (
    <div>
      <h1>HOENN YOURSELF</h1>
      <div onClick={(e) => {props.setView('Home Page')}}>Home Page</div>
      <div onClick={(e) => {props.setView('Gym')}}>Gym</div>
      <div onClick={(e) => {props.setView('Poffin House')}}>Poffin House</div>
      <div onClick={(e) => {props.setView('Pokemon Center')}}>Pokemon Center</div>
    </div>
  )
};

export default Navbar;