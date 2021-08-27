import { useState } from 'react';
import BumperCar from '../StatelessBumperCar';
import WaitingDrivers from '../WaitingDrivers';

export default function PropsPage({cars, drivers}) {
  const [driverIndex, setDriverIndex] = useState(0);
  return (
    <div>
      {
        cars.map((car, i) => (
          <BumperCar
          color={car.color}
          driver={drivers[(driverIndex+i) % drivers.length]}
          />
        ))
      }
      <br />
      <button
        onClick={() => setDriverIndex(
          (current) =>
            current < (drivers.length - 1) ?
              ++current : 0
        )}
      >
        Next driver
      </button>
      <br />
      <strong>Waiting Drivers</strong>
      <WaitingDrivers
        driverIndex={driverIndex}
        drivers={drivers}
        numberOfCars={cars.length}
      />
    </div>
  );
}
