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
  const [dayOfWk, setDayOfWk] = useState([false, false, false, false, false, false, false])

  const weekday = ["Sunday's Knuckle","Monday's Dynamo","Tuesday's Heat","Wednesday's Balance","Thursday's Feather","Friday's Mind","Saturday's Rain"]

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
    let badgeArray = dayOfWk;
    badgeArray[current.getDay()] = true;
    setDayOfWk(badgeArray);
    axios.post('/gym', exercise)
  };

  return (
    <GymContainer toggleModal={toggleModal}>
      <div>
        <Badges dayOfWk={dayOfWk}/>
        <WorkoutDayTitle>{weekday[current.getDay()]} Badge</WorkoutDayTitle>
        {exercise.map((e, i) => {
          return <Tracker key={'tracker' + i} exercise={exercise} setExercise={setExercise} name={e.name} submit={submit} date={date}/>
        })}
        {toggleModal ? <AddModal exercise={exercise} setExercise={setExercise} setToggleModal={setToggleModal} date={date} toggleModal={toggleModal}/> :<button onClick={toggleAddModal}>Add Exercise</button>}
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
  width: 100%;
  height: 100%;

`;

const WorkoutDayTitle = styled.h1`
  text-align: center;
`;