import React, { useEffect, useState } from "react";
import {
  formatDays,
  formatHours,
  formatMinute,
  formatSeconds,
} from "../utils/utils";

const calculateTimeLeft = (difference) => {
  let timeLeft = {};
  let year = new Date().getFullYear();
  const endTime = new Date(year, 1, 21, 9, 30, 0, 0); // Feb 21, 9:30am
  const startTime = new Date(year, 1, 19, 20, 30, 0, 0); // Feb 19, 8:30pm
  difference["startDifference"] = +startTime - +new Date();
  difference["endDifference"] = +endTime - +new Date();

  let diff, days, hours, minutes, seconds;
  if (difference.startDifference > 0) {
    diff = difference.startDifference;
  } else if (difference.endDifference > 0) {
    diff = difference.endDifference;
  }

  days = formatDays(diff);
  hours = formatHours(diff);
  minutes = formatMinute(diff);
  seconds = formatSeconds(diff);

  timeLeft = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };

  return timeLeft;
};

const useCounter = (difference) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(difference));

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft(difference)),
      1000
    );
    return () => clearInterval(interval);
  }, [difference]);

  return timeLeft;
};

export default function Countdown() {
  let difference = {};
  const timeleft = useCounter(difference);

  return (
    <div className="countdown">
      <div className="countdown__text-wrapper">
        {difference.startDifference > 0 ? (
          <div className="countdown__text">Hacking time will begin in:</div>
        ) : (
          <div className="countdown__text">Hacking remaining: </div>
        )}
        <div id="clock" className="font-weight-bold countdown__timer">
          {timeleft.days}:{timeleft.hours}:{timeleft.minutes}:{timeleft.seconds}
        </div>
      </div>
      <script src="../scripts/countdown.js"></script>
    </div>
  );
}
