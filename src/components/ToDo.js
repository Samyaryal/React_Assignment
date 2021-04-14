import React from 'react';
import { Button } from 'react-bootstrap';

const ToDo = ({ todo, removeTodo, completeTodo }) => {
  var color;
  var text;
  if (todo.complete === true) {
    color = 'lightgreen';
    text = 'Complete';
  } else {
    color = 'pink';
    text = 'Incomplete';
  }
  return (
    <div className="todo" style={{ background: color }}>
      <span>{todo.name}</span>
      <div>
        <Button variant="primary" onClick={() => completeTodo(todo.id)}>
          {text}
        </Button>

        <Button variant="danger" onClick={() => removeTodo(todo.id)}>
          Remove from list
        </Button>
      </div>
    </div>
  );
};

export default ToDo;
