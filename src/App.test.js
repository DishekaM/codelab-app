import React from 'react';
import { render} from '@testing-library/react';

import App from './App';






test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tech Exchange React Component by Disheka Moore/i);
  expect(linkElement).toBeInTheDocument();
});
