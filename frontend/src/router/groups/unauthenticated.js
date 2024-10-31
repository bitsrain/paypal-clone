import LoginPage from '../../components/Login';
import SignUp from '../../components/SignUp';

export default [
  {
    path: "/",
    element: <div>Home Page</div>,
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
