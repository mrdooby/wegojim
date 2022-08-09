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

  const toggleAddModal = (e) => {
    e.preventDefault();
    setToggleModal(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setExercise([]);
  };

  return (
    <div>
      {console.log('exercise', exercise)}
      <Badges/>
      <GymTitle/>
      {exercise.map((e, i) => {
        return <Tracker key={'tracker' + i} name={exercise[i]['name']}/>
      })}
      <button onClick={toggleAddModal}>Add Exercise</button>
      <>
        {toggleModal ? <AddModal exercise={exercise} setExercise={setExercise} setToggleModal={setToggleModal}/> : null}
      </>
      <button onClick={handleReset}>Cancel Workout</button>
    </div>
  );
};

export default Gym;