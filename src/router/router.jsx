import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ProductDetails from "../components/product/productDetails";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'products/:id',
        element: <ProductDetails/>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])

export default router;