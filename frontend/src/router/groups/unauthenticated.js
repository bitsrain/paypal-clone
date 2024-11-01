import LoginPage from '../../components/Login';
import SignUp from '../../components/SignUp';

export default [
  {
    path: "/",
    element: <LoginPage />, // fix log out redirection to /login
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
