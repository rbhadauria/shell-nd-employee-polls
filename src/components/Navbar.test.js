import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProvider } from '../setupTests';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders', () => {
    renderWithProvider(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it('renders home as default active', () => {
    renderWithProvider(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('home-nav')).toHaveClass('active');
    expect(screen.getByTestId('leaderboard-nav')).not.toHaveClass('active');
  });

  it('should reflect leaderboard as active nav based on url', () => {
    renderWithProvider(
      <MemoryRouter initialEntries={['/leaderboard']}>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByTestId('home-nav')).not.toHaveClass('active');
    expect(screen.getByTestId('leaderboard-nav')).toHaveClass('active');
  });
});
