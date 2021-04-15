import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoForm from '../components/TodoForm';

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId} = render(<TodoForm onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});

//snapshot testing
it('submits ', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<TodoForm  onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(getByTestId).toMatchSnapshot();
});

