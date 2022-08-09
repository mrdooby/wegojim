import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Badges from './Badges.jsx';
import GymTitle from './GymTitle.jsx';
import Tracker from './Tracker.jsx';
import AddModal from './AddModal.jsx';
import Cancel from './Cancel.jsx';

const Gym = (props) => {
  const [exercise, setExercise] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const toggleAddModal = async (e) => {
    e.preventDefault();
    setToggleModal(true);
  };

  return (
    <div>
      {console.log('exercise', exercise)}
      <Badges/>
      <GymTitle/>
      {exercise.map((e, i) => {
        return <Tracker key={'tracker' + i} name={exercise[i]['name']}/>
      })}
      <button onClick={toggleAddModal}>add exercise</button>
      <>
        {toggleModal ? <AddModal exercise={exercise} setExercise={setExercise} setToggleModal={setToggleModal}/> : null}
      </>
      <Cancel/>
    </div>
  );
};

export default Gym;