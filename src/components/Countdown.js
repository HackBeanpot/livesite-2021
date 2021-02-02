import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  // const endTime = new Date(year, 1, 21, 9, 30, 0, 0); // Feb 21, 9:30am
  const endTime = new Date(year, 1, 19, 18, 0, 0, 0); // Feb 19, 6:00pm
  const difference = +endTime - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

const useCounter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

export default function Countdown() {
  const timeleft = useCounter();

  return (
    <div className="countdown">
      <div className="countdown__text-wrapper">
        {/* <div className="countdown__text">Hacking time remaining</div> */}
        <div className="countdown__text">Hacking will begin in: </div>
        <div id="clock" className="font-weight-bold countdown__timer">
          {timeleft.days}:{timeleft.hours}:{timeleft.minutes}:{timeleft.seconds}
        </div>
      </div>
      <script src="../scripts/countdown.js"></script>
    </div>
  );
}
