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
  const [myKey, setKey] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          mount vs render
        </p>
      </header>

      <BumperCar
        driver={drivers[index] ?? '(empty)'}
        key={myKey}
      />

      <button
        onClick={() => setIndex(
          (current) => ++current
        )}
      >
        Next driver
      </button>

      <button
        onClick={() => setKey(myKey+1)}
      >
        Key ({myKey}): Click to Increment
      </button>
    </div>
  );
}

export default App;
