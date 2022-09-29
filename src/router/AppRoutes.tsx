import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/Home";
import ErrorPage from "../views/ErrorPageScreen";
import Details from "../views/Details";

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
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
