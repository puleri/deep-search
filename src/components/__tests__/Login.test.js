import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Login from '../Login/Login.js';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test('should render Login component along with welcome message', () => {
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

test("header renders with correct text", () => {
  const { getByTestId } = render(<Login />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe("Deep Search");
})

test('subheader should reference videologic', () => {
  const { getByTestId } = render(<Login />)

  const subheaderEl = getByTestId('subheader')

  expect(subheaderEl.textContent).toBe('Videologic presents...')
})

test("sign in function should make popup", () => {
  expect()
})
