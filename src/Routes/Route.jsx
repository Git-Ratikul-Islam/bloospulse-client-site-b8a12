import {
      createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SearchForm from "../Pages/Home/SearchForm/SearchForm";
import Registration from "../Pages/Home/Registration/Registration";
import Dashboard from "../Pages/Home/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/search',
                        element: <PrivateRoute><SearchForm></SearchForm></PrivateRoute>
                  },
                  {
                        path: '/blog',

                  },
                  {
                        path: '/registration',
                        element: <Registration></Registration>
                  },
                  {
                        path: '/funding'

                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  }

            ]
      },
      {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
]);