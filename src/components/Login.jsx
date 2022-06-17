import { useState, useEffect, Fragment } from 'react';
import classes from './Login.module.css';

// The login state sticks upon refreshing the page
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') setIsLoggedIn(true);
  }, []); // the function would only be called upon the first time rendering the page

  const submitHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return !isLoggedIn ? (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' autoComplete='off' required></input>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        autoComplete='off'
        required
      ></input>
      <button className={classes['login-btn']} type='submit'>
        Login
      </button>
    </form>
  ) : (
    <Fragment>
      <button className={classes['logout-btn']} onClick={logout}>
        Logout
      </button>
      <h1 className={classes.message}>Successfully Logged In!</h1>
    </Fragment>
  );
};

export default Login;
