import ProtectedRoute from "../ProtectedRoute";
import Dashboard from '../../components/Dashboard';

export default [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <div>User Profile</div>,
      },
    ],
  },
];
