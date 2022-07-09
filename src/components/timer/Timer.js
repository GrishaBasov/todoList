import React, { useState, useEffect } from 'react';

const Timer = ({ min, sec, setTimeFromTimer, id }) => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [timerOn, setTimer] = useState(false);

  useEffect(() => {
    setTime(() => {
      if (min === '') {
        min = 0;
      }
      if (sec === '') {
        sec = 0;
      }
      return {
        minutes: min,
        seconds: sec,
      };
    });
  }, []);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        if (time.seconds > 0) {
          setTime(() => {
            return {
              seconds: time.seconds - 1,
              minutes: time.minutes,
            };
          });
          setTimeFromTimer(id, time.minutes, time.seconds);
        }
        if (time.seconds === 0 && time.minutes > 0) {
          setTime((time) => {
            return {
              seconds: time.seconds + 59,
              minutes: time.minutes - 1,
            };
          });
          setTimeFromTimer(id, time.minutes, time.seconds);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerOn, time.minutes, time.seconds]);

  let m = time.minutes;
  let s = time.seconds;

  m < 10 && (m = '0' + m);
  s < 10 && (s = '0' + s);

  return (
    <span className="description">
      <button onClick={() => setTimer(true)} className="icon icon-play" />
      <button onClick={() => setTimer(false)} className="icon icon-pause" />
      &nbsp;&nbsp;&nbsp;&nbsp; {m}:{s}
    </span>
  );
};

export default Timer;
