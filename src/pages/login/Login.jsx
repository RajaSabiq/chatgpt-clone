import React from 'react';
import './Login.css';
import { login } from '../../services/auth';

const Login = () => {
  return (
    <div className='container'>
      <div className='login-box'>
        <h2>Welcome back</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target['email']['value'];
            const password = e.target['password']['value'];
            login(email, password);
          }}
        >
          <input
            required
            name='email'
            type='email'
            placeholder='Email address*'
            className='input-field'
          />

          <input
            required
            name='password'
            type='password'
            placeholder='Password'
            className='input-field'
          />

          <button className='btn'>Continue</button>
        </form>
        <p className='signup-text'>
          Don’t have an account? <span className='signup-link'>Sign Up</span>
        </p>

        <div className='divider'>
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <div className='footer-text'>
          <span>Terms of Use</span> | <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
