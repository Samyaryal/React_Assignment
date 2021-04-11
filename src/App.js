import React, {useState} from 'react';
import './App.css';
import data from './data.json'
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';


const App = () => {
  const [todos, setTodos] = useState(data);
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
    if (!event.target.value.length ){
      return
    } 
    setNewTodo(event.target.value)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  const completetodo = id=> {
    const newTodos = [...todos];
    newTodos[id].complete = true;
    setTodos(newTodos);
  }
  // const completetodo = id => {
  //   const newTodos = [...todos].slice;
  //   for (let i = 0; i < newTodos.length; i++)
  //   if (todos[i].id=== id){
  //     var newcomplete = !newTodos[i].complete;
  //     newTodos[i].complete = newcomplete
  //   }
  //   setTodos(newTodos);
  // }
  
  return (
    <div className ="App">
    <Header />
    <ToDoList todos= {todos} handledelete ={removeTodo}  completetodo={completetodo}/>
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
