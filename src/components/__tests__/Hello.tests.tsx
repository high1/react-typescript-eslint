import React from 'react';
import { render, screen } from '@testing-library/react';

import Hello from 'components/Hello';

test('Text and svg should exist', () => {
  const testMessage = 'Test Message';
  render(<Hello title={testMessage} />);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
});
