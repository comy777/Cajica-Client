import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import ErrorPage from "../views/ErrorPageScreen";
import Details from "../views/Details";
import IdeasScreen from "../views/IdeasScreen";
import Galery from "../views/Galery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "details/:id",
    element: <Details />,
  },
  {
    path: "ideas",
    element: <IdeasScreen />,
  },
  {
    path: "galery",
    element: <Galery />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
