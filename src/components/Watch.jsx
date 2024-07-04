import React from "react";
import { useState, useEffect } from "react";
const Watch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    console.log(start);
    if (start) {
      interval = setInterval(() => {
        setTime((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!start) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  const handlerStartStop = () => {
    setStart(!start);
    console.log(start);
  };
  const handlerReset = () => {
    setStart(false);
    setTime(0);
  };
  const min = Math.floor(time / 60);
  const sec = time % 60;
  return (
    <div>
      <h1>Stopwatch</h1>
      <div style={{ marginBottom: "10px" }}>
        Time: {`${min}:${sec < 10 ? `0${sec}` : sec}`}
      </div>
      <div>
        <button onClick={handlerStartStop}>{start ? "Stop" : "Start"}</button>
        <button onClick={handlerReset}>Reset</button>
      </div>
    </div>
  );
};
export default Watch;
