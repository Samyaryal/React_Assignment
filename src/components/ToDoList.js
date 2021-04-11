import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({todos, handledelete, completetodo}) => {
   return (
       <div>
           {todos.map(todo => {
            return (
            <ToDo key ={todo.id} todo={todo} handledelete ={handledelete} completetodo={completetodo}/>)    
           })}
       </div>
   );
};
 
export default ToDoList;