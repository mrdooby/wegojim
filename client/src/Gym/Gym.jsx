import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Badges from './Badges.jsx';
import GymTitle from './GymTitle.jsx';
import Tracker from './Tracker.jsx';
import AddModal from './AddModal.jsx';
import Cancel from './Cancel.jsx';
import img from '../HomePage/ImageURLs.js';
import styled from 'styled-components';

const Gym = (props) => {
  const [exercise, setExercise] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [dayOfWk, setDayOfWk] = useState({sun: false, mon: false, tues: false, wed: false, thurs: false, fri: false, sat: false})

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
    axios.post('/gym', exercise)
  };

  return (
    <GymContainer>
      <div>
        <Badges dayOfWk={dayOfWk}/>
        <GymTitle/>
        {exercise.map((e, i) => {
          return <Tracker key={'tracker' + i} exercise={exercise} setExercise={setExercise} name={e.name} submit={submit} date={date}/>
        })}
        <button onClick={toggleAddModal}>Add Exercise</button>
        <>
          {toggleModal ? <AddModal exercise={exercise} setExercise={setExercise} setToggleModal={setToggleModal} date={date} toggleModal={toggleModal}/> : null}
        </>
        <button onClick={(e) => {handleReset()}}>Cancel Workout</button>
        <button onClick={(e) => {handleFinish().then(()=>{handleReset()})}}>Finish Workout</button>
      </div>
    </GymContainer>
  );
};

export default Gym;

// styled components

const GymContainer = styled.div`
  background-image: url(${img.gymBackground});
  width: vw;
  height: vh;
`;