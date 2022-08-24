import { fireEvent, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import { renderWithProvider } from '../setupTests';
import { BrowserRouter } from 'react-router-dom';

describe('Login Page', () => {
  it('renders', () => {
    renderWithProvider(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('renders login form fields', () => {
    renderWithProvider(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const usernameField = screen.getByTestId('username');
    expect(usernameField).toBeInTheDocument();
    const passwordField = screen.getByTestId('password');
    expect(passwordField).toBeInTheDocument();
    const submitBtn = screen.getByTestId('submitBtn');
    expect(submitBtn).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });

  it('renders error when credentials are incorrect', async () => {
    renderWithProvider(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const username = screen.getByTestId('username');
    const password = screen.getByTestId('password');
    fireEvent.change(username, { value: 'usernameNotExists' });
    fireEvent.change(password, { value: 'wrongPassword' });

    const submitBtn = screen.getByTestId('submitBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      const error = screen.getByTestId('auth-error');
      expect(error).toBeInTheDocument();
    });
  });
});
