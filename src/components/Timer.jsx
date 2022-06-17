import { useState, useEffect } from 'react';
import classes from './Timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return <h1 className={classes.timer}>{time}</h1>;
};

export default Timer;
