import React, {useState, useEffect, lazy, Suspense} from 'react';
import Gym from '../src/Gym/Gym.jsx';
import PoffinHouse from '../src/PoffinHouse/PoffinHouse.jsx';
import PokemonCenter from '../src/PokemonCenter/PokemonCenter.jsx';
import HomePage from '../src/HomePage/HomePage.jsx';

const App = () => {
  const [view, setView] = useState('');

  const renderView = () => {
    switch (view) {
      case 'Gym':
        return <Gym />;
      case 'Poffin House':
        return <PoffinHouse />
      case 'Pokemon Center':
        return <PokemonCenter />
      case 'Home Page':
        return <HomePage setView={setView}/>
      default:
        return <HomePage setView={setView}/>
    }
  };

  const handleGymSwitch = () => {
    return setView('Gym')
  };

  const handlePoffinHouseSwitch = () => {
    return setView('Poffin House')
  };

  const handlePokemonCenterSwitch = () => {
    return setView('Pokemon Center')
  };

  return (
    <div>
      <h1>HOENN YOURSELF</h1>
      <div onClick={(e) => {setView('HomePage')}}>Home Page</div>
      <div onClick={handleGymSwitch}>Gym</div>
      <div onClick={handlePoffinHouseSwitch}>Poffin House</div>
      <div onClick={handlePokemonCenterSwitch}>Pokemon Center</div>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </div>
  )
}

export default App;