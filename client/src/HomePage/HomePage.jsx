import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HomePage = (props) => {
  return (
    <div>
      <img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-omega-ruby-and-alpha-sapphire/9/99/Pokeblock_kit.png' onClick={(e) => {props.setView('Poffin House')}}></img>
      <img src='https://static.wikia.nocookie.net/pokefanbattleuniverse/images/2/28/Calis_Pokemon_Gym_by_UltimateTraveler.png/revision/latest?cb=20120203235713' onClick={(e) => {props.setView('Gym')}}></img>
      <img src='https://www.models-resource.com/resources/big_icons/12/12016.png' onClick={(e) => {props.setView('Pokemon Center')}}></img>
    </div>
  )
};

export default HomePage;