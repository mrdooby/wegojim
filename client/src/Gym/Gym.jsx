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
  const [submit, setSubmit] = useState(false);

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`

  const toggleAddModal = (e) => {
    e.preventDefault();
    setToggleModal(true);
  };

  const handleReset = async () => {
    setExercise([]);
    setToggleModal(false);
    setSubmit(false);
  };

  const handleFinish = async () => {
    setSubmit(true);
    // axios.post('/gym', exercise)
    console.log('exercise', exercise)
  };

  return (
    <div>
      <Badges/>
      <GymTitle/>
      {exercise.map((e, i) => {
        return <Tracker key={'tracker' + i} exercise={exercise} setExercise={setExercise} name={e.name} submit={submit} date={date}/>
      })}
      <button onClick={toggleAddModal}>Add Exercise</button>
      <>
        {toggleModal ? <AddModal exercise={exercise} setExercise={setExercise} setToggleModal={setToggleModal} date={date}/> : null}
      </>
      <button onClick={(e) => {handleReset()}}>Cancel Workout</button>
      <button onClick={(e) => {handleFinish().then(()=>{handleReset()})}}>Finish Workout</button>
    </div>
  );
};

export default Gym;