import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import Button from './Button';
import Input from './Input';

const Login = (props) => {
  const { authedUser, error, login } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const usernameRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    login({ username, password });
  };

  if (authedUser) {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  }
  return (
    <div className="login-container">
      <div className="content">
        <h1>Employee Polls</h1>
        <h2>Log in</h2>
        {error && (
          <div className="error" data-testid="auth-error">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            label="User"
            ref={usernameRef}
            id="username"
            data-testid="username"
            placeholder="User"
            required
          />
          <Input
            label="Password"
            ref={passwordRef}
            type="password"
            id="password"
            data-testid="password"
            placeholder="Password"
            required
          />
          <Button label="Submit" type="submit" data-testid="submitBtn" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
