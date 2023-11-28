/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AllUserData = ({ data }) => {
      const { name, email, district, upazila, imageUrl } = data;
      const { user } = useContext(AuthContext);
      const [userStatus, setUserStatus] = useState("active");

      const openModal = () => {
            Swal.fire({
                  title: "Select User Status",
                  showCancelButton: true,
                  confirmButtonText: "Active",
                  cancelButtonText: "Blocked",
                  reverseButtons: true,
            }).then((result) => {
                  if (result.isConfirmed) {
                        // User clicked "Active"
                        setUserStatus("active");
                  } else {
                        // User clicked "Blocked"
                        setUserStatus("blocked");
                  }
            });
      };

      const handleBlock = () => {
            // Handle logic for blocking the user
            setUserStatus("blocked");
      };

      const handleUnblock = () => {
            // Handle logic for unblocking the user
            setUserStatus("active");
      };

      return (
            <tbody>
                  {/* row 1 */}
                  <tr>
                        <td>
                              <div className="flex items-center gap-3">
                                    <div className="avatar">
                                          <div className="mask mask-squircle w-12 h-12">
                                                <img src={imageUrl} alt="User Avatar" />
                                          </div>
                                    </div>
                                    <div>
                                          <div className="font-bold">{name}</div>
                                          <div className="text-sm opacity-50">{email}</div>
                                    </div>
                              </div>
                        </td>
                        <td>
                              {district}
                              <br />
                              <span className="badge badge-ghost badge-sm">{upazila}</span>
                        </td>
                        <td>
                              <button className={`btn btn-sm ${userStatus === "blocked" ? "bg-red-500" : "bg-green-300"}`} onClick={openModal}>
                                    {userStatus === "blocked" ? "Blocked" : "Active"}
                              </button>
                        </td>
                        <th className="space-x-2">
                              <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                                    <li>
                                          <a onClick={handleUnblock}>
                                                Unblock
                                          </a>
                                    </li>
                                    <li>
                                          <a onClick={handleBlock}>
                                                Block
                                          </a>
                                    </li>
                                    <li>
                                          <a>
                                                Make Volunteer
                                          </a>
                                    </li>
                              </ul>
                        </th>
                  </tr>
            </tbody>
      );
};

export default AllUserData;
