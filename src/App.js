import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json'
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (event) => {
    event.preventDefault();
    const todoObject = {
      id: todos.length + 1,
      name: newTodo,
      complete: false
    }
    setTodos(todos.concat(todoObject))
    setNewTodo('')
  }

  const handlenewChange = (event) => {
    setNewTodo(event.target.value)
  }

  const removeTodo = id => {
    const newTodos = [...todos]
    const updatedtodo = newTodos.filter(todo => todo.id !== id);
    setTodos(updatedtodo)
  }


  const completeTodo = id => {
    const newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos[i].complete = !newTodos[i].complete;
      }
    }
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <TodoForm
          onSubmit={addTodo}
          value={newTodo}
          onChange={handlenewChange}
        />
        <ToDoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
      </div>
    </div>
  )
}

export default App;
