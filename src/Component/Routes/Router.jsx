import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../ErrorElement/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Estates from "../Estates/Estates";
import Estate from "../Estate/Estate";
import EstateDetails from "../EstateDetails/EstateDetails";

import UpdateProfile from "../UpdateProfile/UpdateProfile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Testimonials from "../Testimonials/Testimonials";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/estate",
        element: <Estate></Estate>
      },
      {
        path: "/estates",
        element: <Estates></Estates>
      },
      {
        path: "/estate/:id",
        element: <PrivetRoute><EstateDetails></EstateDetails></PrivetRoute>
      },
      {
        path: "/updateProfile",
        element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
      },
      {
        path: "/testimonials",
        element: <PrivetRoute><Testimonials></Testimonials></PrivetRoute>
      }
    ]
  }
]);

export default router;
