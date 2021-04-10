import React from 'react';

const TodoForm =({onSubmit, value, onChange}) => {
  return (
    <div>
    <form onSubmit ={onSubmit}>
    <input placeholder ="Add a new todo" value={value} onChange={onChange}/>
    <button type="submit">Add New Todo</button>
    </form>
    </div>
  )
}

export default TodoForm;