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
    id: 'car1',
  },
  {
    color: 'green',
    id: 'car2',
  },
  {
    color: 'purple',
    id: 'car3',
  },
  {
    color: 'blue',
    id: 'car4',
  },
];

function App() {
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
              component={() => <PropsPage
                cars={originalCars}
                drivers={drivers}
              />}
            />
            <Route
              path="/state-page"
              component={() => <StatePage
                initialCarsArray={originalCars}
              />}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
