import React, {useState, useEffect, lazy, Suspense} from 'react';
import Gym from '../src/Gym/Gym.jsx';
import PoffinHouse from '../src/PoffinHouse/PoffinHouse.jsx';
import PokemonCenter from '../src/PokemonCenter/PokemonCenter.jsx';
import HomePage from '../src/HomePage/HomePage.jsx';
import Navbar from './Navbar.jsx';

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
        return <PokemonCenter />
    }
  };
  return (
    <div>
      <Navbar setView={setView}/>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </div>
  )
}

export default App;
