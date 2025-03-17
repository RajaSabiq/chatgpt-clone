import { Router } from 'react-router-dom';
import './App.css';
import Typewriter from './components/Typewriter';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useState } from 'react';
import auth from './routes/auth';
import chat from './routes/chat';

function App() {
  const router = createBrowserRouter([...chat(), ...auth()]);

  console.log(router);

  return <RouterProvider router={router} />;
}

export default App;
