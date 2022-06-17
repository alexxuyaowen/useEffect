import { Fragment } from 'react';
import Timer from './components/Timer';
import Login from './components/Login';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <Timer />
      <Login />
      <Counter />
    </Fragment>
  );
}

export default App;
