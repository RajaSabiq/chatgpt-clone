import React from 'react';
import Typewriter from '../../components/Typewriter';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className='app'>
      <div className='right'>
        <h1>ChatGPT</h1>
        <Typewriter text={'Typewriter'} />
      </div>
      <div className='left'>
        <h2>Get Started</h2>
        <div className='authBtn'>
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate('/sign-up');
            }}
          >
            Registration
          </button>
        </div>
        <button>Try it first</button>
      </div>
    </div>
  );
};

export default Landing;
