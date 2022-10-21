import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import ErrorPage from "../views/ErrorPageScreen";
import Details from "../views/Details";
import IdeasScreen from "../views/IdeasScreen";

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
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
