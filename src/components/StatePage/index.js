import { useState } from 'react';
import BumperCar from '../StatefulBumperCar';

export default function StatePage({initialCarsArray}) {
  const [cars, setCars] = useState(initialCarsArray);
  return (
    <div>
      {
        cars.map((car, i) => {
          const key = i;
          return <BumperCar
            color={car.color}
            key={key}
            myKey={key}
          />
        })
      }
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
