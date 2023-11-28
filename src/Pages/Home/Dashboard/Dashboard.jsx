
import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
      const { user } = useContext(AuthContext);
      useEffect(() => {
            // Display SweetAlert on component mount

            Swal.fire({
                  title: `Welcome, ${user.email}!`,
                  showConfirmButton: false,
                  timer: 1500, // Adjust as needed
            });
      }, [user.email]);
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