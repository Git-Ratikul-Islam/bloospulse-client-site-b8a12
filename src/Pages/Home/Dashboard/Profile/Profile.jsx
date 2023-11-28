

const Profile = () => {

      return (

            <div>
                  <div className="h-20  border-b-2 w-full border-b-gray-700">


                        <div className="dropdown dropdown-end justify-end flex p-3">

                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                              </div>
                              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                          <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                          </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                              </ul>
                        </div>

                  </div>
                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                <label>
                                                      <input type="checkbox" className="checkbox" />
                                                </label>
                                          </th>
                                          <th>Name</th>
                                          <th>Job</th>
                                          <th>Favorite Color</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    <tr>
                                          <th>
                                                <label>
                                                      <input type="checkbox" className="checkbox" />
                                                </label>
                                          </th>
                                          <td>
                                                <div className="flex items-center gap-3">
                                                      <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <div className="font-bold">Hart Hagerty</div>
                                                            <div className="text-sm opacity-50">United States</div>
                                                      </div>
                                                </div>
                                          </td>
                                          <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                          </td>
                                          <td>Purple</td>
                                          <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                          </th>
                                    </tr>
                                    {/* row 2 */}

                              </tbody>



                        </table>
                  </div>

            </div >
      );
};

export default Profile;