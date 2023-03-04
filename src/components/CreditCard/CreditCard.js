import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const padNum = ('00' + expirationMonth).slice(-2);
  const pickNum = number.slice(12);
  return (
    <div className="creditCard-section">
      <div
        className="creditCard"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="container">
          <div className="cardType">
            {type === 'Visa' && (
              <img
                src="https://logos-marques.com/wp-content/uploads/2021/07/VISA-logo-1536x624.png"
                alt="visa"
              />
            )}
            {type === 'Master Card' && (
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo-1024x576.png"
                alt="master"
              />
            )}
          </div>
          <div className="number">
            <p>**** **** **** {pickNum}</p>
          </div>
          <div className="expires">
            <p>
              <span>Expires </span>
              {padNum}/{expirationYear}
            </p>
            <p>{bank}</p>
          </div>
          <div className="ownerName">
            <p>{owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
