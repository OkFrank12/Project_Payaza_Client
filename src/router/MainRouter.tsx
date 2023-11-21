import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import PrivateRouter from "./PrivateRouter";
import DetailedPage from "../pages/DetailedPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <ProductsPage />
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
    path: "detail",
    element: <DetailedPage />,
  },
]);
