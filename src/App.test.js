import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';
import App from './App';


test('handles user input', async () => {
  window.prompt = jest.fn(() => 'input from the user');
  console.log = jest.fn();

  const { getByText } = render(<TextInput promptText="Name?" />);
  fireEvent.click(getByText('Name?'));

  expect(window.prompt).toHaveBeenCalledWith('Name?');
  expect(console.log).toHaveBeenCalledWith('input from the user')
  expect(getByText(/input from the user/i)).toBeInTheDocument();
});



test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tech Exchange React Component by Disheka Moore/i);
  expect(linkElement).toBeInTheDocument();
});
