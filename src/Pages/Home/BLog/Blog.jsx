const Blog = () => {
      return (
            <main className="">

                  <div className="mb-4 md:mb-0 w-full mx-auto">
                        <div className="px-4 lg:px-0">
                              <a

                                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                              >
                                    Blood Donation
                              </a>
                        </div>

                        <img
                              src="https://i.ibb.co/10tRJ3H/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg"
                              className="w-full object-cover lg:rounded"
                              style={{ height: '28em' }}
                              alt="Description"
                        />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:space-x-12">

                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                              <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                                    justice. Six draw
                                    you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                                    resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
                                    outlived peculiar rendered led six.</p>

                              {/* Other paragraphs... */}

                              <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
                                    make two real
                                    miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
                                    to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
                                    without me.</p>

                        </div>

                        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                              <div className="p-4 border-t border-b md:border md:rounded">
                                    <div className="flex py-2">
                                          <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                                className="h-10 w-10 rounded-full mr-2 object-cover"
                                                alt="User Avatar"
                                          />
                                          <div>
                                                <p className="font-semibold text-gray-700 text-sm"> Ratikul Islam </p>
                                                <p className="font-semibold text-gray-600 text-xs"> Writer </p>
                                          </div>
                                    </div>
                                    <p className="text-gray-700 py-3">
                                          Mike writes about blood donation
                                          Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                                    </p>
                                    <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                          Follow
                                          <i className='bx bx-user-plus ml-2'></i>
                                    </button>
                              </div>
                        </div>

                  </div>
            </main>
      );
};

export default Blog;
