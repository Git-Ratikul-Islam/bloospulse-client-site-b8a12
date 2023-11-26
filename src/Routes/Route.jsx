import {
      createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SearchForm from "../Pages/Home/SearchForm/SearchForm";
import Registration from "../Pages/Home/Registration/Registration";


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
                        element: <SearchForm></SearchForm>
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
                        path: ''
                  }
            ]
      },
      {
            path: '/dashboard',
      }
]);