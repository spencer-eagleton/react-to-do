import { render, screen } from '@testing-library/react';
import App from './App';

test('renders email text', async () => {
  render(<App />);
  const linkElement = await screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
