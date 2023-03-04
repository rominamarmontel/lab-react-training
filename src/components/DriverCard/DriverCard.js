import React from 'react';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <section>
      <p>{name}</p>
      <p>{rating}</p>
      <img src={img} alt="" />
      <p>{car.model}</p>
      <p>{car.licensePlate}</p>
    </section>
  );
};

export default DriverCard;
