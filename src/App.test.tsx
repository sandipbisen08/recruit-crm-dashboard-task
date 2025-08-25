import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders recruit crm application', () => {
  render(<App />);
  const logoElement = screen.getByRole('img', { name: /recruit crm logo/i });
  expect(logoElement).toBeInTheDocument();
});
