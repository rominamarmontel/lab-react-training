import React from 'react';
import './IdCard.css';

const IdCard = ({ id }) => {
  return (
    <div class="IdCard">
      <div class="card">
        <img src={id.picture} alt="" />
        <div class="container">
          <p class="lastName">
            <span>Last name: </span>
            {id.lastName}
          </p>
          <p class="firstName">
            <span>First name: </span>
            {id.firstName}
          </p>
          <p class="gender">
            <span>Gender: </span>
            {id.gender}
          </p>
          <p class="height">
            <span>Height: </span>
            {id.height}
          </p>
          <p class="birth">
            <span>Birth: </span>
            {id.birth.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
