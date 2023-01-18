import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  //can use callback at initial state
  const [counter, setCounter] = useState(() => {
    const defaultCounter = 10
    return defaultCounter
  })
  const handleIncrease = () => {
    //Use callback to call more than 1 time
    //setCounter(prev => prev + 1)
    setCounter(counter + 1)
  }
  const handleDecrease = () => {
    setCounter(counter - 1)
  }
  return (
    <React.Fragment>
      {React.createElement('h1', null, 'Counter')}
      <div>{counter}</div>
      <Button
        title='Increase'
        onClick={handleIncrease}>
      </Button>
      <Button
        title='Decrease'
        onClick={handleDecrease}>
      </Button>
    </React.Fragment>
  );
}

export default App;
