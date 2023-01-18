import React, { useState } from 'react';
import Button from './components/Button';
import List from './components/List';

function App() {

  const [todo, setTodo] = useState('')
  const [listTodos, setListTodos] = useState(() => {
    const storagTodo = JSON.parse(localStorage.getItem('listTodos'))
    return storagTodo || []
  })
  const listRender = (item, index) => (
    <li key={index}>
      {item}
      <Button
        title='Remove'
        onClick={() => handleRemoveTodo(item)}>
      </Button>
    </li>
  )
  const handleAddTodo = () => {
    setListTodos(prev => {
      const newListTodo = [...prev, todo]
      const jsonTodoList = JSON.stringify(newListTodo)
      localStorage.setItem('listTodos', jsonTodoList)
      return newListTodo
    })
    setTodo('')
  }
  const handleRemoveTodo = (item) => {
    setListTodos(prev => {
      const newListTodo = prev.filter((element) => element !== item)
      const jsonTodoList = JSON.stringify(newListTodo)
      localStorage.setItem('listTodos', jsonTodoList)
      return newListTodo
    })
  }
  return (
    <React.Fragment>
      {React.createElement('h1', null, 'Simple TodoList')}
      <input
        value={todo}
        placeholder='Add something...'
        onChange={(e) => setTodo(e.target.value)} />
      <Button
        title='Add'
        onClick={handleAddTodo}>
      </Button>
      <List data={listTodos}>{listRender}</List>
    </React.Fragment>
  );
}

export default App;
