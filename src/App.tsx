import React from 'react';
import './App.css';
import { useRandom } from './useRandom';

const App: React.FC = () => {
  const [value, setNewRandom] = useRandom();

  return (
    <div className='App'>
      <button onClick={() => setNewRandom(0, 100)}>New</button>
      <p data-testid='value'>{value === 7 ? `Lucky ${value}` : value}</p>
    </div>
  );
};

export default App;
