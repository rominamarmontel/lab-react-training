import React from 'react';

const Rating = (props) => {
  const { children } = props;

  const star = (children) => {
    if (children < 0.49) return '☆☆☆☆☆';
    else if (children <= 1.49) return '★☆☆☆☆';
    else if (children <= 2.49) return '★★☆☆☆';
    else if (children <= 3.49) return '★★★☆☆';
    else if (children <= 4.49) return '★★★★☆';
    else if (children > 4.49) return '★★★★★';
  };
  return <div>{star(children)}</div>;
};
export default Rating;
