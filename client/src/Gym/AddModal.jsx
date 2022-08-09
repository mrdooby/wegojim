import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddModal = (props) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Barbell');
  const [bodyPart, setBodyPart] = useState('Core');

  const handleClick = (e) => {
    e.preventDefault();
    props.setExercise([...props.exercise, {name: name, category: category, bodyPart: bodyPart}]);
    props.setToggleModal(false);
  };

  return (
    <div>
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
      <button onClick={handleClick}>Add</button>
    </div>
  )
};

export default AddModal;