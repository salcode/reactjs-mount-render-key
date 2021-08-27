import Mounted from '../Mounted';

export default function StatelessBumperCar({color, driver}) {
  return (
    <div className="bumper-car" style={{borderColor: color}}>
      <Mounted />
      <strong>Bumper Car</strong>
      <div className="bumper-car__driver">
        {driver}
      </div>
    </div>
  );
}
