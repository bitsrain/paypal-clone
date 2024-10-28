import ProtectedRoute from "../ProtectedRoute";

import MainLayout from "../../components/common/MainLayout";
import Dashboard from '../../components/Dashboard';

import SendLayout from "../../components/SendPage/Layout";
import SendPage from '../../components/SendPage';
import SendPreview from '../../components/SendPage/Preview';
import SendSuccess from '../../components/SendPage/Success';

import EditInvoice from '../../components/invoices/EditInvoice';
import ViewInvoice from '../../components/invoices/ViewInvoice';

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
        element: <SendLayout />,
        children: [
          {
            path: "",
            element: <SendPage />,
          },
          {
            path: "preview",
            element: <SendPreview />,
          },
          {
            path: "success",
            element: <SendSuccess />,
          },
        ],
      },
      {
        path: "/invoices",
        element: <MainLayout />,
        children: [
          {
            path: "edit",
            element: <EditInvoice />,
          },
          {
            path: "v/:id",
            element: <ViewInvoice />,
          },
        ]
      }
    ],
  },
];
