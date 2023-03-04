import React from 'react';
import './Random.css';

function Random(props) {
  const { min, max } = props;
  return (
    <div className="random">
      <p>
        <span>
          Random value between {min} and {max} ={' '}
        </span>
        Random({min}, {max})
      </p>
    </div>
  );
}
export default Random;
