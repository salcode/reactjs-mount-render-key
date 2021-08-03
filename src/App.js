import './App.css';

import BumperCar from './components/BumperCar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          mount vs render
        </p>
      </header>
      <BumperCar
        driver="sal"
      />
    </div>
  );
}

export default App;
