import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders branch link', () => {
  render(<App />);
  const linkElement = screen.getByText(/donghyun/i);
  expect(linkElement).toBeInTheDocument();
});
