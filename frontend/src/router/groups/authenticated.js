import ProtectedRoute from "../ProtectedRoute";

export default [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <div>User Home Page</div>,
      },
      {
        path: "/profile",
        element: <div>User Profile</div>,
      },
    ],
  },
];
