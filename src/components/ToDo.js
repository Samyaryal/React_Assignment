import React from 'react';

const ToDo = ({todo, handledelete, completetodo}) => {

  var color;
  var text;
  if (todo.complete === true ){
    color = 'lightgreen';
    text = 'Complete';
  } else {
    color = 'pink';
    text = 'Incomplete'
  }
  return (
    <div className = "wrapper" style ={{background: color}}>
    <h1>{todo.name}</h1>
    <button 
      className = "btn" 
      onClick={completetodo}>{text}</button>
    <button onClick={handledelete}>Remove from list</button>
    </div>
   
  )
}

export default ToDo;