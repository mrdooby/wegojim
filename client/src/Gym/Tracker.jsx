import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tracker = (props) => {
  const [setNum, setSetNum] = useState([{set: 1}]);
  const [prev, setPrev] = useState([{prev: 'lbs x reps'}]);
  const [lbs, setLbs] = useState([{lbs: ''}]);
  const [reps, setReps] = useState([{reps: ''}]);

  const handleLbsChange = (e, i) => {
    let temp = lbs;
    temp[i] = e.target.value;
    setLbs(temp);
  };

  const handleRepsChange = (e, i) => {
    let temp = reps;
    reps[i] = e.target.value;
    setReps(temp);
  };

  const handleAddSet = (e) => {
    e.preventDefault();
    setSetNum([...setNum, {set: setNum[setNum.length - 1]['set'] + 1}]);
    setPrev([...prev, {prev: 'lbs x reps'}]);
    setLbs([...lbs, {lbs: ''}]);
    setReps([...reps, {reps: ''}]);
  }
  return (
    <form>
      {console.log(lbs)}
      <p>Workout Name</p>
      <div>Set</div>
        {setNum.map((e, i) => {
          return <div key={'set ' + i}>{e.set}</div>
        })}
      <div>Previous (lbs x reps)</div>
        {prev.map((e, i) => {
          return <div key={'prev ' + i}>{e.prev}</div>
        })}
      <div>lbs</div>
        {lbs.map((e, i) => {
          return <input key={'lbs ' + i} onChange={(e) => {handleLbsChange(e, i)}}></input>
        })}
      <div>reps</div>
      {reps.map((e, i) => {
        return <input key={'reps ' + i} onChange={(e) => handleRepsChange(e, i)}></input>
      })}
      <button onClick={handleAddSet}>add set</button>
    </form>
  )
};

export default Tracker;