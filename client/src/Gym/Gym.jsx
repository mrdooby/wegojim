import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Badges from './Badges.jsx';
import GymTitle from './GymTitle.jsx';
import Tracker from './Tracker.jsx';
import Add from './Add.jsx';
import Cancel from './Cancel.jsx';

const Gym = (props) => {
  return (
    <div>
      <Badges/>
      <GymTitle/>
      <Tracker/>
      <Add/>
      <Cancel/>
    </div>
  )
};

export default Gym;