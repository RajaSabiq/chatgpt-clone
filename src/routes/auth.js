import Landing from '../pages/landing/Landing';
import Login from '../pages/login';
import Registration from '../pages/registration';

const auth = () => [
  {
    path: '/sign-up',
    element: <Registration />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <Landing />,
  },
];

export default auth;
