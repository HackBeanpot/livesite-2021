import React from 'react';

export default function Countdown() {
  return <div className="countdown">
    <div className="countdown__text-wrapper">
      <div className="countdown__text">
        Hacking time remaining
      </div>
      <div className="font-weight-bold countdown__timer">
        03:34:18
      </div>
    </div>
  </div>;
}