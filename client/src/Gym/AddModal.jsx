import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddModal = (props) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Barbell');
  const [bodyPart, setBodyPart] = useState('Core');
  const [prevNames, setPrevNames] = useState()

  useEffect(() => {
    axios.get('/wegojim/gym/names')
    .then((res) => {
      console.log('prev names', res.data)
      setPrevNames(res.data);
    })
  }, [props.toggleModal]);

  const handleClick = (e) => {
    e.preventDefault();
    props.setExercise([...props.exercise, {name: name, category: category, bodyPart: bodyPart, date: props.date}]);
    props.setToggleModal(false);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setCategory('Barbell');
    setBodyPart('Core');
    props.setToggleModal(false);
  }

  const handleSelectPrevName = (e) => {
    props.setExercise([...props.exercise, {name: e.name, category: e.category, bodyPart: e.body_part, date: props.date}]);
    props.setToggleModal(false);
  };

  return (
    <AddModalBackground>
      <AddModalContainer>
        <AddModalBody>
          <button onClick={handleReset}> X </button>
          <label>Exercise Name</label>
          <input onChange={(e) => {setName(e.target.value)}}></input>
          <label>Body Part</label>
          <select id="BodyPart" onChange={(e) => {setBodyPart(e.target.value)}}>
            <option value="Core">Core</option>
            <option value="Arms">Arms</option>
            <option value="Back">Back</option>
            <option value="Chest">Chest</option>
            <option value="Legs">Legs</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Full Body">Full Body</option>
            <option value="Cardio">Cardio</option>
          </select>
          <label>Category</label>
          <select id="Category" onChange={(e) => {setCategory(e.target.value)}}>
            <option value="Barbell">Barbell</option>
            <option value="Dumbell">Dumbell</option>
            <option value="Machine">Machine</option>
            <option value="Weighted Bodyweight">Weighted Bodyweight</option>
            <option value="Assisted Bodyweight">Assisted Bodyweight</option>
            <option value="Duration">Duration</option>
          </select>
          <div>Previous Exercises</div>
              {prevNames?.map((e) => {
                return(
                <div onClick={(event) => {handleSelectPrevName(e)}}>
                  <p>{e.name}</p>
                  <p>{e.body_part}</p>
                  <p>{e.category}</p>
                </div>
              )})}
          <button onClick={handleClick}>Add</button>
        </AddModalBody>
      </AddModalContainer>
    </AddModalBackground>
  )
};

export default AddModal;

// styled components
const AddModalBackground = styled.div`
  backdrop-filter: blur(8px);
  display: block;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  :hover {
    color: black;
  }
`;

const AddModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #ecd49c;
  text-align: center;
  width: 60%;
  height: 60%;
  border: #8b3726 solid 3px;
`;

const AddModalBody = styled.div`
`;
