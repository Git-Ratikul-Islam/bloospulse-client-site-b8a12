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
import Profile from "../Pages/Home/Dashboard/Profile/Profile";
import AllUsers from "../Pages/Home/Dashboard/AllUsers/AllUsers";
import AllBloodDonationReq from "../Pages/Home/Dashboard/AllBloodDonationReq/AllBloodDonationReq";
import DashboardHome from "../Pages/Home/Registration/DashboardHome";
import Blog from "../Pages/Home/BLog/Blog";
import Error404 from "../Pages/Home/Eror404/Error404";


export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            errorElement: <p>Oppps something went wrong</p>,
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
                        element: <Blog></Blog>

                  },
                  {
                        path: '/registration',
                        element: <Registration></Registration>,
                        loader: () => fetch("https://blood-donation-server-ten.vercel.app/donors")

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
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            loader: () => fetch('https://blood-donation-server-ten.vercel.app/donors'),

            children: [
                  {
                        path: 'profile',
                        element: <Profile></Profile>,


                  },
                  {
                        path: '/dashboard/home',
                        element: <DashboardHome></DashboardHome>
                  },
                  {
                        path: 'allUsers',
                        element: <AllUsers></AllUsers>,
                        loader: () => fetch('https://blood-donation-server-ten.vercel.app/donors')
                  },
                  {
                        path: 'allBloodDonationReq',
                        element: <AllBloodDonationReq></AllBloodDonationReq>
                  }
            ]
      },
      {
            path: '*',
            element: <Error404></Error404>
      }
]);