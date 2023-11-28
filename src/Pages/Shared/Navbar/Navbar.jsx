import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
      const { user, logOut } = useContext(AuthContext);
      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Log out successfully!",
                              showConfirmButton: false,
                              timer: 1500
                        });

                  })
                  .catch(error => console.log(error));
      };

      const navBarOptions = <>
            <li><NavLink to="/"><a>Home</a></NavLink></li>
            <li><a>Blog</a></li>
            <li><a>Donation Request</a></li>
            <li><NavLink to="/registration"><a>Registration</a></NavLink></li>
            <li><NavLink to="/dashboard"><a>Dashboard</a></NavLink></li>
            <li><a>Funding</a></li>
            <li><NavLink to='/search'><a>Search</a></NavLink></li>

      </>;
      return (
            <div className="navbar h-20 fixed z-20 bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navBarOptions}


                              </ul>
                        </div>
                        <img className="w-24" src="https://i.ibb.co/B393KCc/Blood-Donation-Logo.png" alt="" />
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navBarOptions}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        {user ? <ul onClick={handleLogOut}> <li> <a className="btn text-white bg-red-600 border-nones">Log out</a></li></ul> : <Link to="/login"><ul> <li> <a className="btn bg-green-500 text-white border-none">Log in</a></li></ul></Link>}
                  </div>
            </div>
      );
};

export default Navbar;