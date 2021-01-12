import React, { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const endTime = new Date(year, 1, 21, 9, 30, 0, 0); // Feb 21, 9:30am
  const difference = +endTime - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const useCounter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  return timeLeft;
}

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