import React from 'react';

function Split({ str, role }) {
  return (
    <span aria-label={str} role={role}>
      {str.split('').map(function (char, index) {
        let style = { 'animation-delay': 0.5 + index / 10 + 's' };
        return (
          <span
            aria-hidden="true"
            key={index}
            style={style}
            className="timer-number">
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default Split;
