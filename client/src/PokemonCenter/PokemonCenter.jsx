import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PkmnDataModal from './PkmnDataModal.jsx';

const PokemonCenter = (props) => {
  const [exerciseId, setExerciseId] = useState();
  const [toggleModal, setToggleModal] = useState({bool: false, pkmnId: 0});

  useEffect(() => {
    axios.get('/wegojim/pkmnctr')
    .then((res) => {
      setExerciseId(res.data);
    })
  }, []);




  return (
    <BoxContainer>
      {console.log(exerciseId)}
      <ImageContainer>
        <BoxImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dAK0ub1MN2I_gPDmgUolLF6bTTb35fEuO_SLHo2V6TtvecRVKUFvwJVUJN3fEKDfquU&usqp=CAU"/>
      </ImageContainer>
      <TitleContainer>
        <BoxTitle>BOX 1</BoxTitle>
      </TitleContainer>
      <StorageContainer>
        <PokemonContainer>
          {exerciseId?.map((e, i) => {
            return <PokemonSprite
              key={'id ' + i}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`}
              onClick={(event) => {setToggleModal({bool: true, pkmnId: e})}}
            ></PokemonSprite>
          })}
        </PokemonContainer>
      </StorageContainer>
      {toggleModal.bool ? <PkmnDataModal setToggleModal={setToggleModal} pkmnId={toggleModal.pkmnId}/> : null}
    </BoxContainer>
  )
};

export default PokemonCenter;

const BoxContainer = styled.div`

`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxImage = styled.img`
  display: flex;
  margin-top: 25px;
  width: 80%;
  height: auto;
`

const TitleContainer = styled.div`
  position: absolute;
  top: 10%;
  width: 54%;
  height: 18%;
  left: 23%;
`;

const StorageContainer = styled.div`
  position: absolute;
  top: 38%;
  width: 74%;
  height: 110%;
  left: 13%;
`;

const BoxTitle = styled.div`
  font-size: 10vh;
  text-align: center;
  padding: 4%
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PokemonSprite = styled.img`
  width: 20%;
  height: auto;
  :hover {
    cursor: pointer;
  };
`;