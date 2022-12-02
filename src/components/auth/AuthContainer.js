import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import './AuthContainer.scss';

const AuthContainer = () => {
  const [authState, setAuthState] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const registerHandler = () => {
    setAuthState({ login: false, register: true, reset: false });
  };

  const loginHandler = () => {
    setAuthState({ login: true, register: false, reset: false });
  };

  const resetHandler = () => {
    setAuthState({ login: false, register: false, reset: true });
  };

  const cancelHandler = () => {
    setAuthState({ login: true, register: false, reset: false });
  };

  const { login, register, reset } = authState;
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {login && <Login onLogin={registerHandler} onReset={resetHandler} />}
        {register && <Register onRegister={loginHandler} />}
        {reset && <Reset onCancel={cancelHandler} />}
      </div>
    </section>
  );
};

export default AuthContainer;
