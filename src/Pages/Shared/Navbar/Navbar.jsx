import { NavLink } from "react-router-dom";


const Navbar = () => {
      const navBarOptions = <>
            <NavLink to="/"><li><a>Home</a></li></NavLink>
            <li><a>Blog</a></li>
            <li><a>Donation Request</a></li>
            <NavLink to="/registration"><li><a>Registration</a></li></NavLink>
            <NavLink to="/dashboard"><li><a>Dashboard</a></li></NavLink>
            <li><a>Funding</a></li>
            <NavLink to='/search'><li><a>Search</a></li></NavLink>

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
                        <NavLink to="/login"><ul> <li> <a className="btn">Log in</a></li></ul></NavLink>
                  </div>
            </div>
      );
};

export default Navbar;