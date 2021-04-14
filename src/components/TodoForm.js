import React from 'react';
import { Button, Form } from 'react-bootstrap';

const TodoForm = ({ onSubmit, value, onChange }) => {
  return (

    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control className="input" placeholder="Add a new todo.." value={value} onChange={onChange} required />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">Add</Button>
    </Form>

  )
}

export default TodoForm;