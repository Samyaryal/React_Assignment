
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

//Individual Node Testing: testing with testId
it('Renders the header', () => {
  const { getByTestId} = render(<Header />);
  expect (getByTestId('header')).toBeTruthy()
});

//Snapshot testing
it('Renders the headers', () => {
  const { asFragment } = render(<Header text='Todo List' />);
  expect(asFragment()).toMatchSnapshot();
});