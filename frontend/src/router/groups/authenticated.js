import ProtectedRoute from "../ProtectedRoute";
import MainLayout from "../../components/common/MainLayout";
import Dashboard from '../../components/Dashboard';
import SendPage from '../../components/SendPage';
import SendPreview from '../../components/SendPage/Preview';

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
      {
        path: "/send",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <SendPage />,
          },
          {
            path: "preview",
            element: <SendPreview />,
          },
        ],
      },
    ],
  },
];
