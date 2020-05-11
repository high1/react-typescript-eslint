import { render } from 'react-dom';
import { screen } from '@testing-library/react';

test('renders without crashing', () => {
  const title = new Date().toTimeString();
  const renderMock = jest.fn((component, element) =>
    render({ ...component, props: { title } }, element)
  );
  jest.mock('react-dom', () => ({
    render: renderMock,
  }));
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
  require('index');
  expect(renderMock).toHaveBeenCalledTimes(1);
  expect(screen.getByText(title)).toBeInTheDocument();
});
