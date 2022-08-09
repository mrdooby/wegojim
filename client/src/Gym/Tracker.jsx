import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tracker = (props) => {
  const [setNum, setSetNum] = useState([{set: 1}]);
  const [prev, setPrev] = useState([{prev: 'lbs x reps'}]);
  const [lbs, setLbs] = useState([{lbs: ''}]);
  const [reps, setReps] = useState([{reps: ''}]);
  const [data, setData] = ([]);

  useEffect(() => {
    concatData()
    .then((result) => {
      addFinalData(result);
    })
    .then(() => {
      console.log(props.exercise);
    })
  }, [props.submit])

  const concatData = async () => {
    const result = [];
    for (let i = 0; i < setNum.length; i++) {
      let setData = {
        "setNum": setNum[i].set,
        "lbs": lbs[i]['lbs'],
        "reps": reps[i]['reps'],
        "format": `${lbs[i]['lbs']} lbs x ${reps[i]['reps']} reps`
      }
      result.push(setData);
    }
    return result;
  };

  const handleLbsChange = (e, i) => {
    let temp = lbs;
    temp[i]["lbs"] = e.target.value;
    setLbs(temp);
  };

  const handleRepsChange = (e, i) => {
    let temp = reps;
    temp[i]["reps"] = e.target.value;
    setReps(temp);
  };

  const handleAddSet = (e) => {
    e.preventDefault();
    setSetNum([...setNum, {set: setNum[setNum.length - 1]['set'] + 1}]);
    setPrev([...prev, {prev: 'lbs x reps'}]);
    setLbs([...lbs, {lbs: ''}]);
    setReps([...reps, {reps: ''}]);
  };

  const addFinalData = async (info) => {
    for (let i = 0; i < props.exercise.length; i++) {
      if (props.exercise[i].name === props.name) {
        props.exercise[i]['data'] = info
      }
    };
  };

  return (
    <form>
      <p>{props.name}</p>
      <div>Set</div>
        {setNum.map((e, i) => {
          return <div key={'set' + i}>{e.set}</div>
        })}
      <div>Previous (lbs x reps)</div>
        {prev.map((e, i) => {
          return <div key={'prev' + i}>{e.prev}</div>
        })}
      <div>lbs</div>
        {lbs.map((e, i) => {
          return <input key={'lbs' + i} onChange={(e) => {handleLbsChange(e, i)}}></input>
        })}
      <div>reps</div>
      {reps.map((e, i) => {
        return <input key={'reps' + i} onChange={(e) => handleRepsChange(e, i)}></input>
      })}
      <button onClick={handleAddSet}>add set</button>
    </form>
  )
};

export default Tracker;