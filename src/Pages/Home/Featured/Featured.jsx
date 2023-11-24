import { MdOutlineBloodtype } from "react-icons/md";
import { TbTestPipe } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const Featured = () => {
      return (
            <div className="container my-24 mx-auto md:px-6">
                  {/* Section: Design Block */}
                  <section className="mb-32">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                              Why should you donate blood?
                        </h2>

                        <div className="flex flex-wrap items-center">
                              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                                    <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                                          data-te-ripple-init data-te-ripple-color="light">
                                          <img src="https://i.ibb.co/QfczH2w/akram-huseyn-f-KC9e-WRnl-GY-unsplash.jpg" className="w-full" />
                                          <a href="">
                                                <div
                                                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                                                      <div className="flex h-full items-center justify-center">
                                                            <div className="px-6 py-12 text-center text-white md:px-12">
                                                                  <h3 className="mb-6 text-2xl font-bold uppercase">
                                                                        The benefit of donating blood

                                                                  </h3>
                                                                  <p className="text-[hsl(210,12%,80%)]">
                                                                        One of the most significant benefits of blood donation is that it saves lives. Blood transfusions are crucial for various medical conditions, including surgeries, trauma, cancer treatment, and chronic illnesses. By donating blood, individuals contribute to the health and recovery of patients in need.
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                                      <div
                                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                                      </div>
                                                </div>
                                          </a>
                                    </div>
                              </div>

                              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                                    <div className="mb-12 flex">
                                          <div className="shrink-0">
                                                <div className="rounded-md bg-[#ea062b] p-4 shadow-lg ">
                                                      <MdOutlineBloodtype className="text-white" />
                                                </div>
                                          </div>
                                          <div className="ml-4 grow">
                                                <p className="mb-1 font-bold">Become a donator</p>
                                                <p className=" ">
                                                      Blood is vital in emergency situations such as accidents, natural disasters, or sudden illnesses where patients may require immediate transfusions.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="mb-12 flex">
                                          <div className="shrink-0">
                                                <div className="rounded-md bg-[#ea062b] p-4 shadow-lg ">
                                                      <TbTestPipe className="text-white"></TbTestPipe>
                                                </div>
                                          </div>
                                          <div className="ml-4 grow">
                                                <p className="mb-1 font-bold">Why give blood?</p>
                                                <p className="">
                                                      The primary and most immediate impact of blood donation is that it saves lives. Donated blood is used in a variety of medical treatments, including surgeries, trauma care.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="mb-12 flex">
                                          <div className="shrink-0">
                                                <div className="rounded-md bg-[#ea062b] p-4 shadow-lg">
                                                      <FaHandHoldingHeart className="text-white"></FaHandHoldingHeart>
                                                </div>
                                          </div>
                                          <div className="ml-4 grow">
                                                <p className="mb-1 font-bold">How donations help?</p>
                                                <p className="">
                                                      Blood donations are a cornerstone of healthcare, offering a lifeline to countless individuals facing medical challenges. By generously giving blood, donors play a pivotal role in emergency situations, providing essential support in trauma care, accidents, and natural disasters.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex">
                                          <div className="shrink-0">
                                                <div className="rounded-md bg-[#ea062b] p-4 shadow-lg ">
                                                      <MdHealthAndSafety className="text-white" />
                                                </div>
                                          </div>
                                          <div className="ml-4 grow">
                                                <p className="mb-1 font-bold">Regular donation</p>
                                                <p className="">
                                                      Regular blood donation helps in reducing the iron levels in the body. Excessive iron in the body can lead to various health issues, including heart disease. By donating blood, you can help maintain healthy iron levels.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* Section: Design Block */}
            </div>
      );
};

export default Featured;