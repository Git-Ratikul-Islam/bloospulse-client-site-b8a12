import { useLoaderData } from "react-router-dom";
import AllUserData from "./AllUserData";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AllUsers = () => {
      const userData = useLoaderData();

      // eslint-disable-next-line no-unused-vars
      const { name, email } = userData;

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
                                    <li><a onClick={handleLogOut}>Log out</a></li>
                              </ul>
                        </div>

                  </div>
                  <div className="">
                        <table className="table table-zebra w-full">
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