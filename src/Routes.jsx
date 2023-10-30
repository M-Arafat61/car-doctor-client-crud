import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ServiceDetails from "./pages/Home/ServiceDetails/ServiceDetails";
import Checkout from "./pages/Checkout/Checkout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Bookings from "./pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        // path: "service/:id/checkout/:id",
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
