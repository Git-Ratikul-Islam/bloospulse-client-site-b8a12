
const SearchForm = () => {
      return (
            <div className="flex items-center justify-center min-h-screen p-12">

                  <div className="mx-auto w-full max-w-4xl">
                        <form >
                              <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                                <label
                                                      htmlFor="fName"
                                                      className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                      Select blood group
                                                </label>
                                                <select className="select select-error w-full ">
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
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                                <label
                                                      htmlFor="lName"
                                                      className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                      Donator District
                                                </label>
                                                <select className="select select-error w-full ">
                                                      <option disabled selected>District</option>
                                                      <option>A+</option>
                                                      <option>A-</option>

                                                </select>
                                          </div>
                                    </div>
                              </div>
                              <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                                <label
                                                      htmlFor="fName"
                                                      className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                      Select blood group
                                                </label>
                                                <select className="select select-error w-full ">
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
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                                <label
                                                      htmlFor="lName"
                                                      className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                      Donator District
                                                </label>
                                                <select className="select select-error w-full ">
                                                      <option disabled selected>District</option>
                                                      <option>A+</option>
                                                      <option>A-</option>

                                                </select>
                                          </div>
                                    </div>
                              </div>
                              <input className="w-full btn btn-primary bg-black hover:bg-red-500 border-none" type="submit" value="Search" />
                        </form>
                  </div>
            </div>
      );
};

export default SearchForm;