export default function WaitingDrivers({
  driverIndex,
  drivers,
  numberOfCars
}) {
  return (
  <>
    <ul className="waiting-drivers">
      {
        [
          ...drivers,
          ...drivers
        ].slice(
          driverIndex + numberOfCars,
          driverIndex + drivers.length
        ).map((name) => (<li>{name}</li>))
      }
    </ul>
  </>
  );
}

