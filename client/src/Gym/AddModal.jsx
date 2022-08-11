import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import img from '../HomePage/ImageURLs.js';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const AddModal = (props) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState({value: "Barbell", label: "Barbell"});
  const [bodyPart, setBodyPart] = useState({value: "Core", label: "Core"});
  const [prevNames, setPrevNames] = useState()

  const catOptions = [
    {value: "Barbell", label: "Barbell"},
    {value: "Dumbell", label: "Dumbell"},
    {value: "Machine", label: "Machine"},
    {value: "Weighted Bodyweight", label: "Weighted Bodyweight"},
    {value: "Assisted Bodyweight", label: "Assisted Bodyweight"},
    {value: "Duration", label: "Duration"},
  ];

  const bodyOptions = [
    {value: "Core", label: "Core"},
    {value: "Arms", label: "Arms"},
    {value: "Back", label: "Back"},
    {value: "Chest", label: "Chest"},
    {value: "Legs", label: "Legs"},
    {value: "Shoulders", label: "Shoulders"},
    {value: "Full Body", label: "Full Body"},
    {value: "Cardio", label: "Cardio"}
  ];

  useEffect(() => {
    axios.get('/wegojim/gym/names')
    .then((res) => {
      console.log('prev names', res.data)
      setPrevNames(res.data);
    })
  }, [props.toggleModal]);

  const handleClick = (e) => {
    e.preventDefault();
    props.setExercise([...props.exercise, {name: name.value, category: category.value, bodyPart: bodyPart.value, date: props.date}]);
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
          <Exit onClick={handleReset}> X </Exit>
            <PreviousExercises>
              {console.log('name', name)}
              <PreviousTitleContainer>
                <h1>Previous Exercises</h1>
              </PreviousTitleContainer>
              <BiggerContainer>
                {prevNames?.map((e, i) => {
                    return(
                    <PrevExerciseNameContainer key = {"prev" + i}onClick={(event) => {handleSelectPrevName(e)}}>
                      <div>{e.name}</div>
                    </PrevExerciseNameContainer>
                )})}
              </BiggerContainer>
            </PreviousExercises>
            <NewForm>
              <NewFormTitleContainer>
                <h1>Add a new exercise</h1>
              </NewFormTitleContainer>
              <BigContainer>
                <SectionContainer>
                  <SectionName>Exercise Name</SectionName>
                  {/* <NewInput onChange={(e) => {setName(e.target.value)}}></NewInput> */}
                  <CreatableSelect
                    isClearable
                    onChange={setName}
                  />
                </SectionContainer><br></br>
                <SectionContainer>
                  <SectionName>Body Part</SectionName>
                  <NewSelectContainer >
                    <Select
                      defaultValue={bodyPart}
                      options={bodyOptions}
                      onChange={setBodyPart}
                    />
                  </NewSelectContainer>
                </SectionContainer><br></br>
                <SectionContainer>
                  <SectionName>Category</SectionName>
                  <NewSelectContainer>
                    <Select
                      defaultValue={category}
                      options={catOptions}
                      onChange={setCategory}
                    />
                  </NewSelectContainer>
                </SectionContainer><br></br>
                <AddContainer>
                  <Add onClick={handleClick}>Add</Add>
              </AddContainer>
            </BigContainer>
            </NewForm>
      </AddModalContainer>
    </AddModalBackground>
  )
};

export default AddModal;

// styled components
const AddModalBackground = styled.div`
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
  background-color: #d2c8b7;
  text-align: center;
  width: 60%;
  height: 60%;
`;

const Exit = styled.div`
  position: fixed;
  top: 0;
  right 0;
  margin: 5px;
  z-index: 1;
  border: solid black;
  border-radius: 5px;
  background-color: white;
  :hover {
    background-color: #d2bab7;
    cursor: pointer;
  };
  justify-content: center;
`;

const AddContainer = styled.div`
  position: fixed;
  bottom: 10%;
  right: -50%;
  width: 100%;
`;

const Add = styled.div`
  background-color: white;
  border: solid black;
  text-align: center;
  border-radius: 5px;
  width: 30%;
  :hover {
    background-color: #B7C5D2;
    mouse: pointer;
  }
`;

const NewForm = styled.section`
  width: 70%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
`;

const PreviousExercises = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${img.addModalBackground});
  background-size: 125%;
  width: 30%;
  height: 100%;
  overflow: auto;
`;

const PreviousTitleContainer = styled.div`
  margin: 5px;
  border: solid black;
  background-color: white;
  border-radius: 5px;
`;


const PrevExerciseNameContainer = styled.div`
  display: flex;
  border: solid black;
  margin: 5px;
  background-color: white;
  justify-content: center;
  :hover {
    background-color: #d2bab7;
    cursor: pointer;
  }
  border-radius: 5px;

`;

const BiggerContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

const NewFormTitleContainer = styled.div`
  margin: 5px;
`;

const SectionName = styled.h2`
  display: inline-flex;
  margin: 5px;
  align-self: flex-start;
`;

const NewInput = styled.input`
  position: fixed;
  right: 0;
  width: 30%;
  margin: 5px;
  height: auto;
`;

const NewSelectContainer = styled.div`
  position: fixed;
  right: 0;
  width: 30%;
  margin: 5px;
  height: auto;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
`;

