import React from 'react';
import Login from './Login';
import Register from './Register';
import './AuthContainer.scss';

const AuthContainer = () => {
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {/* <Login /> */}
        <Register />
      </div>
    </section>
  );
};

export default AuthContainer;
