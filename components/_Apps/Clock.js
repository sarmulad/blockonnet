import React, { useEffect, useState } from 'react';

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="clock-area">
      <div className="clock-item">
        <div className="clock-number">
          <span>{leading0(days)}</span>
        </div>{' '}
        <span className="date">Days</span>
      </div>

      <div className="clock-item">
        <div className="clock-number">
          <span>{leading0(hours)}</span>
        </div>{' '}
        <span className="date">hours</span>
      </div>
      <div className="clock-item">
        <div className="clock-number">
          <span>{leading0(minutes)}</span>
        </div>{' '}
        <span className="date">minutes</span>
      </div>
      <div className="clock-item">
        <div className="clock-number">
          <span>{leading0(seconds)}</span>
        </div>{' '}
        <span className="date">seconds</span>
      </div>
    </div>
  );
};

export default Clock;
