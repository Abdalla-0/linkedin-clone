import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "@pages/index";
import { lazy } from "react";
import PageSusbence from "@components/common/FeedBack/PageSusbence/PageSusbence";
import ProtectedRoutes from "./ProtectedRoutes";
import Signup from "@pages/Signup/Signup";

const MainLayout = lazy(() => import("@templates/MainLayout/MainLayout"));
const Interface = lazy(() => import("@pages/Interface/Interface"));
const Login = lazy(() => import("@pages/Login/Login"));
const Home = lazy(() => import("@pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageSusbence>
        <Interface />
      </PageSusbence>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: (
      <PageSusbence>
        <Login />
      </PageSusbence>
    ),
  },
  {
    path: "/signup",
    element: (
      <PageSusbence>
        <Signup />
      </PageSusbence>
    ),
  },
  {
    path: "/feed",
    element: (
      <ProtectedRoutes>
        <PageSusbence>
          <MainLayout />
        </PageSusbence>
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSusbence>
            <Home />
          </PageSusbence>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
