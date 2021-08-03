import { useState } from 'react';
import './App.css';

import BumperCar from './components/BumperCar';

const drivers = [
  'abby',
  'barry',
  'cat',
  'danny',
];

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          mount vs render
        </p>
      </header>

      <BumperCar
        driver={drivers[index] ?? '(empty)'}
      />

      <button
        onClick={() => setIndex(index+1)}
      >
        Next driver
      </button>
    </div>
  );
}

export default App;
