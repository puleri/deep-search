import { render, screen, cleanup } from '@testing-library/react';
import Login from '../Login/Login.js';

test('should render Login component with welcome message', () => {
  render(<Login/>);
  const loginElement = screen.getByTestId('Login');
  expect(loginElement).toBeInTheDocument();
  expect(loginElement).toHaveTextContent('Deep Search(Space edition)Login with Google')
})

test('should render login button', () => {
  render(<Login/>);
  const loginElement = screen.getByTestId('Button');
  expect(loginElement).toBeInTheDocument();
})
