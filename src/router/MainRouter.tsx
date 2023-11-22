import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import PrivateRouter from "./PrivateRouter";
import HistoryPage from "../pages/HistoryPage";
import DetailedPage from "../pages/DetailedPage";
import Layout from "../components/Common/Layout";
import BINpage from "../pages/BINpage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
  },
  {
    path: "/history",
    element: (
      <PrivateRouter>
        <HistoryPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/bin",
    element: (
      <PrivateRouter>
        <BINpage />
      </PrivateRouter>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/:token/verify-auth",
    element: <LoginPage />,
  },
  {
    path: "/:id/detail",
    element: (
      <PrivateRouter>
        <DetailedPage />
      </PrivateRouter>
    ),
  },
]);
