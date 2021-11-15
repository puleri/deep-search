import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Login from '../Login/Login.js';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let getByTestId;

beforeEach(() => {
  const component = render(<Login />)
  getByTestId = component.getByTestId
})


test('should render Login component along with welcome message', () => {
  const loginElement = getByTestId('Login');
  expect(loginElement).toBeInTheDocument();
  expect(loginElement).toHaveTextContent('Deep Search(Space edition)Login with Google')
})

test('should render login button', () => {
  const loginElement = getByTestId('Button');
  expect(loginElement).toBeInTheDocument();
})

test("header renders with correct text", () => {
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe("Deep Search");
})

test('subheader should reference videologic', () => {

  const subheaderEl = getByTestId('subheader')

  expect(subheaderEl.textContent).toBe('Videologic presents...')
})

test("sign in function should fire once on click", () => {
  const button = getByTestId('Button')
  const signInWithFirebase = jest.fn()

  render(<button onClick={signInWithFirebase()}/>)
  fireEvent.click(screen.getByText(/Login with Google/i))
  expect(signInWithFirebase).toHaveBeenCalledTimes(1)
})

test("login container has correct class name", () => {
  const loginContainer = getByTestId('Login')

  expect(loginContainer.className).toBe("login-container");
})
