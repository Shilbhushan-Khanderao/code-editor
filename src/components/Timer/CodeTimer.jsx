import React from "react";
import { useStopwatch } from "react-timer-hook";

function CodeTimer() {
  const { totalSeconds, seconds, minutes, hours, reset, isRunning } =
    useStopwatch({
      autoStart: true,
    });
  return (
    <div>
      <div className="timer">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default CodeTimer;
