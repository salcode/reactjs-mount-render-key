import { useState } from 'react';
import Mounted from '../Mounted';

function BumperCar({color, driver}) {
  const [damage, setDamage] = useState(0);
  return (
    <div className="bumper-car" style={{borderColor: color}}>
      <Mounted />

      <strong>Bumper Car</strong>

      <div className="bumper-car__driver">
        {driver}
      </div>

      <button
        onClick={() => {
          setDamage(
            (currentDamage) => currentDamage < 100 ? currentDamage + 10 : 100
          );
        }}
      >
        Add Damage
      </button>
      <div>
        Current Damage: {damage}%
      </div>
    </div>
  );
}

export default BumperCar;
