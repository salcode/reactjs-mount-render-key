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
  const [driverIndex, setDriverIndex] = useState(0);
  const [hasColorAsKey, setHasColorAsKey] = useState(false);
  const [cars, setCars] = useState(originalCars);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          mount vs render
        </p>
      </header>

      {
        cars.map((car, i) => (
          <BumperCar
            color={car.color}
            driver={drivers[(driverIndex+i) % drivers.length] ?? '(empty)'}
            key={hasColorAsKey ? car.color : i}
          />
        ))
      }

      <button
        onClick={() => setDriverIndex(
          (current) => ++current
        )}
      >
        Next driver
      </button>
      <br />
      <button
        onClick={ () => setCars(
          // (cars) => cars.reverse() // does NOT trigger re-render
          // (cars) => [...cars] // DOES trigger re-render
          (cars) => [...cars].reverse() // DOES trigger re-render

          // (cars) => { // does NOT trigger re-render
          //   cars.push({color: 'orange'});
          //   return cars;
          // }
          // (cars) => { // DOES trigger re-render
          //   const newCars = [...cars];
          //   newCars.push({color: 'orange'});
          //   return newCars;
          // }
          // (cars) => [...cars, {color: 'orange'}]; // DOES trigger re-render
        ) }
      >
        Reverse Car Order
      </button>
      <br />
      <div>
        Key is <code>{hasColorAsKey ? "car.color" : "(array index)"}</code>
      </div>
      <button
        onClick={() => setHasColorAsKey((hasColorAsKey) => !hasColorAsKey)}
      >
        Toggle value used for Key
      </button>
    </div>
  );
}

export default App;
