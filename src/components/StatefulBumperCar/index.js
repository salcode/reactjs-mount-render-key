import Mounted from '../Mounted';

export default function StatefulBumperCar({color}) {
  return (
    <div className="bumper-car" style={{backgroundColor: color}}>
      <Mounted />
      <strong>Bumper Car</strong>
    </div>
  );
}
