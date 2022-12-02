import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import './AuthContainer.scss';

const AuthContainer = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);

  const registerHandler = () => {
    setLogin(false);
    setRegister(true);
    setReset(false);
  };

  const loginHandler = () => {
    setRegister(false);
    setLogin(true);
    setReset(false);
  };

  const resetHandler = () => {
    setLogin(false);
    setReset(true);
    setRegister(false);
  };

  const cancelHandler = () => {
    setReset(false);
    setLogin(true);
    setRegister(false);
  };
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
