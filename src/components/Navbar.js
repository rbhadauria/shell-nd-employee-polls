import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../actions/auth';
import AvatarWithName from './AvatarWithName';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  let activePath = location.pathname;
  let authedUser = useSelector((state) => {
    return state.auth.authedUser;
  });

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav data-testid="nav" className="nav">
      <ul className="nav-items">
        <Link
          data-testid="home-nav"
          to={'/'}
          className={`nav-item ${activePath === '/' ? 'active' : ''}`}>
          <li>Home</li>
        </Link>
        <Link
          data-testid="leaderboard-nav"
          to={'/leaderboard'}
          className={`nav-item ${
            activePath === '/leaderboard' ? 'active' : ''
          }`}>
          <li>Leaderboard</li>
        </Link>
        <Link
          data-testid="new-nav"
          to={'/add'}
          className={`nav-item ${activePath === '/add' ? 'active' : ''}`}>
          <li>New</li>
        </Link>
      </ul>
      <ul className="nav-items">
        {authedUser && (
          <li className="nav-item">
            <div className="user-info">
              <AvatarWithName size="small" user={authedUser} />
            </div>
          </li>
        )}

        <li className="nav-item">
          <Button onClick={handleLogout} label={'Logout'} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
