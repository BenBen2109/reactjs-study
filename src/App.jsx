import React from 'react';
import Button from './components/Button';
import List from './components/List';

function App() {
  const cars = ['BMW', 'Honda', 'Merc']
  const listRender = (item) => <li key={item}>{item}</li>
  return (

    <React.Fragment>
      {React.createElement('h1', null, 'Haha')}
      <Button
        title='Click Me!' href='https://facebook.com'
        onClick={
          () => console.log(Math.random())}>
        asdasd
      </Button>
      <List data={cars}>{listRender}</List>
    </React.Fragment>
  );
}

export default App;
