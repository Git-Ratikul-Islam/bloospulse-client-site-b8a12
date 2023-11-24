import {
      createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SearchForm from "../Pages/Home/SearchForm/SearchForm";


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
                  }
            ]
      },
]);