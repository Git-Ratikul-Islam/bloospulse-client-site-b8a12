
const DashboardHome = () => {
      return (
            <div className="overflow-x-auto">
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
                        <tbody>
                              {/* row 2 */}
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
                                                            <img src="https://i.ibb.co/82dQYCJ/372626323-164759486653316-366531122905599354-n.jpg" />
                                                      </div>
                                                </div>
                                                <div>
                                                      <div className="font-bold">Brice Swyre</div>
                                                      <div className="text-sm opacity-50">ratikul@gmail.com</div>
                                                </div>
                                          </div>
                                    </td>
                                    <td>
                                          <span className="badge badge-ghost badge-sm bg-green-400">Pending</span>
                                    </td>
                              </tr>
                              {/* row 3 */}
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
                                                            <img src="https://i.ibb.co/n7jNCXf/395582499-824855409644044-3366447712730888248-n.jpg" />
                                                      </div>
                                                </div>
                                                <div>
                                                      <div className="font-bold">Umme</div>
                                                      <div className="text-sm opacity-50">umme@gmail.com</div>
                                                </div>
                                          </div>
                                    </td>
                                    <td>
                                          <span className="badge badge-ghost badge-sm bg-green-400">Pending</span>
                                    </td>
                              </tr>
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
                                                            <img src="https://i.ibb.co/J259MN0/363387270-669741625200291-6574829636688052532-n.jpg" />
                                                      </div>
                                                </div>
                                                <div>
                                                      <div className="font-bold">mokles</div>
                                                      <div className="text-sm opacity-50">mokles@gmail.com</div>
                                                </div>
                                          </div>
                                    </td>
                                    <td>
                                          <span className="badge badge-ghost badge-sm bg-green-400">Pending</span>
                                    </td>
                              </tr>
                        </tbody>


                  </table>
            </div>
      );
};

export default DashboardHome;