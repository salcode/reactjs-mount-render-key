import Mounted from '../Mounted';

function BumperCar({driver}) {
  return (
    <div className="bumper-car">
      <Mounted />
      <strong>Bumper Car</strong>

      <div className="bumper-car__driver">
        {driver}
      </div>

    </div>
  );
}

export default BumperCar;
