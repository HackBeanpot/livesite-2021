import React from 'react';
import useCounter from '../hooks/counter-hook';

export default function Countdown() {
  const timeleft = useCounter();

  return (
    <div className="countdown">
      <div className="countdown__text-wrapper">
        <div className="countdown__text">
          Hacking time remaining
        </div>
        <div id="clock" className="font-weight-bold countdown__timer">
          {timeleft.days}:{timeleft.hours}:{timeleft.minutes}:{timeleft.seconds}
        </div>
      </div>
      <script src="../scripts/countdown.js"></script>
    </div>
  );
};