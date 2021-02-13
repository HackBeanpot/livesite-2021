import { useEffect, useState } from "react";
import { isTimeBetween } from "../utils/utils";

const useShowTime = (startTime, endTime) => {
  const [shouldShow, setShouldShow] = useState(() =>
    isTimeBetween(startTime, endTime)
  );

  useEffect(() => {
    console.log("update!");
    const interval = setInterval(() => {
      // every 5 seconds, check whether or not the status has changed.
      // if so, then set state
      const newShouldShow = isTimeBetween(startTime, endTime);
      if (newShouldShow !== shouldShow) {
        setShouldShow(newShouldShow);
      }
    }, 5 * 1000);
    return () => clearInterval(interval);
    // will update whenever props change, and twice when shouldShow changes
  }, [startTime, endTime, shouldShow]);

  return shouldShow;
};

export default useShowTime;
