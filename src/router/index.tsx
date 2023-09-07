import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/products/Products";
import User from "../pages/users/Users";
import Layout from "../layouts/Layout";
import Error from "../pages/error/Error";
import { Login } from "../pages/login";
import Users from "../pages/users/Users";
import Products from "../pages/products/Products";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
    ],

    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
