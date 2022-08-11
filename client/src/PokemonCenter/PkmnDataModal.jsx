import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
const PkmnDataModal = (props) => {

  const handleReset = (e) => {
    e.preventDefault();
    props.setToggleModal(false);
  }

  return (
    <PkmnDataModalBackground>
        <PkmnDataModalContainer>
          <Exit onClick={handleReset}> X </Exit>
            <PkmnData>hello {props.pkmnId}</PkmnData>
        </PkmnDataModalContainer>
    </PkmnDataModalBackground>
  )
};

export default PkmnDataModal;

//styled components
const PkmnDataModalBackground = styled.div`
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

const PkmnDataModalContainer = styled.div`
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

const PkmnData = styled.div`
`;