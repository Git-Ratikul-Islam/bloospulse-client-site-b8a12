import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
      return (
            <section className="" >
                  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-4">
                              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                    <p className="text-base font-semibold uppercase tracking-wide  ">
                                          Contact
                                    </p>
                                    <h2 className="font-heading mb-4 font-bold text-3xl sm:text-5xl">
                                          Get in Touch
                                    </h2>

                              </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                              <div className="grid md:grid-cols-2">
                                    <div className="h-full pr-6">
                                          <p className="mt-3 mb-12 text-lg ">
                                                Contact with us with the contact number or send us by message we will our team will reach you soon.And always be with donation.Thank you.
                                          </p>
                                          <ul className="mb-6 md:mb-0">
                                                <li className="flex">
                                                      <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ea062b] text-gray-50">
                                                            <FaLocationDot></FaLocationDot>
                                                      </div>
                                                      <div className="ml-4 mb-4">
                                                            <h3 className="mb-2 text-lg font-medium leading-6">Our Address</h3>
                                                            <p className="">1204 Jatrabari, jurain</p>
                                                            <p className="">Bangladesh, Dhaka</p>
                                                      </div>
                                                </li>
                                                {/* Repeat similar structure for other list items */}
                                                {/* ... */}
                                          </ul>
                                          <ul className="mb-6 md:mb-0">
                                                <li className="flex">
                                                      <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ea062b] text-gray-50">
                                                            <FaPhoneAlt></FaPhoneAlt>
                                                      </div>
                                                      <div className="ml-4 mb-4">
                                                            <h3 className="mb-2 text-lg font-medium leading-6">Contact Number</h3>
                                                            <p className="">01302718046</p>
                                                            <p className="">donate@blood.com</p>
                                                      </div>
                                                </li>
                                                {/* Repeat similar structure for other list items */}
                                                {/* ... */}
                                          </ul>
                                    </div>
                                    <div className="card h-fit max-w-6xl p-5 md:p-12" >
                                          <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                          <form id="contactForm">
                                                <div className="mb-6">
                                                      <div className="mx-0 mb-1 sm:mb-4">
                                                            <div className="mx-0 mb-1 sm:mb-4">
                                                                  <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                                  <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-[#ea062b] py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="name" />
                                                            </div>
                                                            <div className="mx-0 mb-1 sm:mb-4">
                                                                  <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                                  <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-[#ea062b] py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="email" />
                                                            </div>
                                                      </div>
                                                      <div className="mx-0 mb-1 sm:mb-4">
                                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                            <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-[#ea062b] py-2 pl-2 pr-4 shadow-md  sm:mb-0"></textarea>
                                                      </div>
                                                </div>
                                                <div className="text-center">
                                                      <button type="submit" className="w-full bg-[#ea062b] text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ContactUs;