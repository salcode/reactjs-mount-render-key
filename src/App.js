import { useState } from 'react';
import './App.css';

import BumperCar from './components/BumperCar';

const drivers = [
  'abby',
  'barry',
  'cat',
  'diane',
  'elwood',
  'frank',
  'greg',
  'hank',
  'issac',
  'jr',
  'kate',
];

const originalCars = [
  {
    color: 'red',
  },
  {
    color: 'green',
  },
  {
    color: 'purple',
  },
  {
    color: 'blue',
  },
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
