import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders branch link', () => {
  render(<App />);
  const linkElement = screen.getByText(/branch/i);
  expect(linkElement).toBeInTheDocument();
});
