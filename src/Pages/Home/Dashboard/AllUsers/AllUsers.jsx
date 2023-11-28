import { useLoaderData } from "react-router-dom";
import AllUserData from "./AllUserData";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";


const AllUsers = () => {
      const userData = useLoaderData();
      // eslint-disable-next-line no-unused-vars
      const { name, email } = userData;

      const { user } = useContext(AuthContext);
      // console.log(userData);
      return (

            <div className="">
                  <div className="h-20  border-b-2 w-full border-b-gray-700">


                        <div className="dropdown dropdown-end justify-end flex p-3">

                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/jfHk3t0/pexels-felipe-borges-2597205.jpg" />
                                    </div>
                              </div>
                              <ul className="menu menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>{user.email}</a></li>
                                    <li><a>Logout</a></li>
                              </ul>
                        </div>

                  </div>
                  <div className="">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>Name</th>
                                          <th>District/Upazila</th>
                                          <th>Status</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              {
                                    userData.map((data) => (
                                          <AllUserData key={data._id} data={data}>

                                          </AllUserData>
                                    ))
                              }
                        </table>
                  </div>

            </div>
      );
};

export default AllUsers;