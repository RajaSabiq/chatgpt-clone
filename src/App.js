import { Router } from 'react-router-dom';
import './App.css';
import Typewriter from './components/Typewriter';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useState } from 'react';
import auth from './routes/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const router = createBrowserRouter([...auth()]);

  return <RouterProvider router={router} />;
}

export default App;
