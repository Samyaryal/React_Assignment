import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';

const App = () => {
  const [todos, setTodos] = useState([  {id: 1, name: 'Go to the supermarket', complete: false},
  {id: 2, name: 'Call Alice', complete: false},
  {id: 3, name: 'Ask Alice to call Bob', complete: false},
  {id: 4, name: 'Do the dishes', complete: false},
  {id: 5, name: 'Change car tyres', complete: false}]);

  const [newTodo, setNewTodo] = useState('')

  const addTodo =(event) => {
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
    console.log(event.target.value);
    setNewTodo(event.target.value)
  }

  const removeTodo = (index) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo);
  }
  
  return (
    <div className ="App">
    <Header />
    <ToDoList todos= {todos} />
    <TodoForm 
    onSubmit = {addTodo}
    value={newTodo} 
    onChange={handlenewChange}
    />
    <Footer />
    </div>
  )
}

export default App;
