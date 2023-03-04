import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="IdCard">
      <img src={picture} alt="" />
      <div className="container">
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
