import { useState, useEffect } from 'react';
import classes from './Counter.module.css';

// a counter that automatically alerts the most recent count value when the user stops changing the count value for 1s
const Counter = () => {
  const [count, setCount] = useState(0);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    if (shouldAlert) {
      const timeout = setTimeout(() => {
        alert(count);
        setShouldAlert(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [count, shouldAlert]);

  return (
    <div className={classes.counter}>
      <h1>Counter: {count}</h1>

      <div className={classes.buttons}>
        <button
          onClick={() => {
            setCount(prev => prev + 1);
            setShouldAlert(true);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(prev => prev - 1);
            setShouldAlert(true);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
