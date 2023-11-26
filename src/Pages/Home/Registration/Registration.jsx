

const Registration = () => {
      const handleSubmitForm = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const group = form.group.value;
            const email = form.email.value;
            const file = form.file.value;
            const district = form.district.value;
            const upazila = form.upazila.value;
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;
            const userData = {
                  name, email, district, upazila, password, file, confirmPassword, group
            };
            console.log(userData);
      };



      return (
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                  <div className="container max-w-screen-lg mx-auto">
                        <div>
                              <h2 className="font-semibold text-xl text-gray-600 mb-6">Register Now to become a donor!</h2>
                              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                    <form onSubmit={handleSubmitForm}>
                                          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                                <div className="text-gray-600">
                                                      <p className="font-medium text-lg">Personal Details</p>
                                                      <p>Please fill out all the fields.</p>
                                                </div>

                                                <div className="lg:col-span-2">
                                                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                            <div className="md:col-span-5">
                                                                  <label >Full Name</label>
                                                                  <input type="text" name="name" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                  <label>Email Address</label>
                                                                  <input type="text" name="email" required className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label >Avatar</label>
                                                                  <input type="file" name="file" required className="file-input file-input-bordered w-full max-w-2xl" />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                  <label
                                                                        className=" block text-base font-medium text-[#07074D]"
                                                                  >
                                                                        Donator District
                                                                  </label>
                                                                  <select type="text" required name="district" className="select select-bordered w-full ">
                                                                        <option disabled selected>District</option>
                                                                        <option>Dhaka</option>
                                                                        <option>Barisal</option>
                                                                        <option>Chittagong</option>
                                                                        <option>Khulna</option>
                                                                        <option>Rajshahi</option>

                                                                  </select>
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                  <label

                                                                        className=" block text-base font-medium text-[#07074D]"
                                                                  >
                                                                        Upazila
                                                                  </label>
                                                                  <select type="text" name="upazila" required className="select select-bordered w-full ">
                                                                        <option disabled selected>Upazila</option>
                                                                        <option>Savar</option>
                                                                        <option>Sadar</option>
                                                                        <option>Cox's Bazar</option>
                                                                        <option>Jessore</option>
                                                                        <option>Bogura</option>

                                                                  </select>
                                                            </div>
                                                            <div className="md:col-span-1">
                                                                  <label

                                                                        className="block text-base font-medium text-[#07074D]"
                                                                  >
                                                                        Blood Group
                                                                  </label>
                                                                  <select type="text" name="group" required className="select select-bordered w-full ">
                                                                        <option disabled selected>Blood Group</option>
                                                                        <option>A+</option>
                                                                        <option>A-</option>
                                                                        <option>B+</option>
                                                                        <option>B-</option>
                                                                        <option>AB+</option>
                                                                        <option>AB-</option>
                                                                        <option>O+</option>
                                                                        <option>O-</option>

                                                                  </select>
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label >Password</label>
                                                                  <input required type="password" name="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label>Confirm passwords</label>
                                                                  <input required type="password" name="confirmPassword" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                            </div>
                                                            <div className="md:col-span-5">

                                                                  <input required type="submit" className="h-10 btn border mt-1 rounded px-4 w-full  bg-green-600" value="Register" />
                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default Registration;