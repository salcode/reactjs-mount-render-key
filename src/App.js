import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import BumperCar from './components/BumperCar';
import NavBar from './components/NavBar';
import PropsPage from './components/PropsPage';
import StatePage from './components/StatePage';

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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route
              path="/props-page"
              component={() => <PropsPage />}
            />
            <Route
              path="/state-page"
              component={() => <StatePage />}
            />
          </Switch>


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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
