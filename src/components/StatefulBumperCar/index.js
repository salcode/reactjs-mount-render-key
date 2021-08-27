import { useState } from 'react';
import Mounted from '../Mounted';

export default function StatefulBumperCar({color, myKey}) {
  const [damage, setDamage] = useState(0);
  return (
    <div className="bumper-car" style={{backgroundColor: color}}>
      <Mounted />
      <strong>Bumper Car (Key: {myKey})</strong>
      <br />
      <button
        onClick={() => {
          setDamage(
            (currentDamage) => currentDamage < 100 ? currentDamage + 10 : 100
          );
        }}
      >
        Add Damage
      </button>
      <div className="display-damage">
        Current Damage: {damage}%
      </div>

    </div>
  );
}
