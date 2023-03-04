import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const { r, g, b } = props;

  function ColorToHex(color) {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
  }
  return (
    <div className="boxcolor" style={{ backgroundColor: `rgb(${r},${g},${b}` }}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{'#' + ColorToHex(r) + ColorToHex(g) + ColorToHex(b)}</p>

      {/* {r === '255' && (
        <p style={{ color: 'white' }}>
          rgb({r}, {g}, {b})
        </p>
      )}
      {r === '255' && (
        <p>({'#' + ColorToHex(r) + ColorToHex(g) + ColorToHex(b)})</p>
      )} */}
    </div>
  );
};

export default BoxColor;
