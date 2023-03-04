import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  const star = (rating) => {
    if (rating < 0.49) return '☆☆☆☆☆';
    else if (rating <= 1.49) return '★☆☆☆☆';
    else if (rating <= 2.49) return '★★☆☆☆';
    else if (rating <= 3.49) return '★★★☆☆';
    else if (rating <= 4.49) return '★★★★☆';
    else if (rating > 4.49) return '★★★★★';
  };
  return (
    <section className="DriverCard">
      <div className="container">
        <picture>
          <img src={img} alt="" />
        </picture>
        <div className="name">
          <p>{name}</p>
          <p>{star(rating)}</p>
          <div className="model">
            <p>{car.model} </p>-<p> {car.licensePlate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverCard;
