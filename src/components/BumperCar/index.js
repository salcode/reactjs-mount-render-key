function BumperCar({driver}) {
  return (
    <div className="bumper-car">

      <strong>Bumper Car</strong>

      <span className="fade-out">(mount)</span>

      <div className="bumper-car__driver">
        {driver}
      </div>

    </div>
  );
}

export default BumperCar;
