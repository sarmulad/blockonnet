import React, { useState } from 'react';
import Clock from './Clock';

const Countdown = () => {
  let deadline = 'September, 21,2022';

  return (
    <div className="countdown-popup">
      <div className="price-text">
        <h5>Presale ends in</h5>
      </div>
      <Clock deadline={deadline} />
    </div>
  );
};

export default Countdown;
