
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
      return (
            <div className="flex">

                  {/* dashboard side bar */}
                  <div className="w-64 min-h-screen bg-red-600">

                        <ul className="menu">

                              <li>
                                    <NavLink className="bg-white mb-1" to="/dashboard">Dashboard</NavLink>

                              </li>
                              <li>
                                    <NavLink className="bg-white mb-1" to="/dashboard/profile">Profile</NavLink>

                              </li>
                              <li>
                                    <NavLink className="bg-white mb-1" to="/dashboard/allUsers">All users</NavLink>

                              </li>
                              <li>
                                    <NavLink className="bg-white mb-1" to="/dashboard/allBloodDonationReq">All blood donation request</NavLink>

                              </li>
                              <li>
                                    <NavLink className="bg-white" to="/">Go home</NavLink>

                              </li>

                        </ul>
                  </div>
                  {/* dashboard content */}

                  <div className="flex-1">
                        <Outlet></Outlet>
                  </div>

            </div>
      );
};

export default Dashboard;