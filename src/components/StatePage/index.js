import { useState } from 'react';
import BumperCar from '../StatefulBumperCar';

export default function StatePage({initialCarsArray}) {
  const [cars, setCars] = useState(initialCarsArray);
  const [keyType, setKeyType] = useState('index');
  return (
    <div>
      {
        cars.map((car, i) => {
          const key = keyType === 'index' ? i : car.id;
          return <BumperCar
            color={car.color}
            key={key}
            myKey={key}
          />
        })
      }
      <br />
      <select
        onChange={(event) => {
          setKeyType(event.target.value);
        }}
      >
        <option value="index" selected>Use array index for key</option>
        <option value="id">Use car.id for key</option>
      </select>
      <br />
      <br />
      <button
        onClick={() => setCars(
          (cars) => [...cars].sort( () => .5 - Math.random() )
        )}
      >
        Shuffle Cars
      </button>
    </div>
  );
}
