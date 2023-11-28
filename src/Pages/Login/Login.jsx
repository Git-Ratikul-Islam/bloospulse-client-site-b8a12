import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { signIn } = useContext(AuthContext);

      const from = location.state?.from?.pathname || "/";


      const handleLogin = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            if (password.length < 6) {
                  Swal.fire({
                        icon: "error",
                        title: "Password Error",
                        text: "Password must be at least 6 characters long.",
                        showConfirmButton: true
                  });
                  return;
            }
            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);

                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Logged in successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        navigate(from, { replace: true });
                        form.reset();


                  });

      };

      return (
            <section className="text-white">
                  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a className="flex items-center mb-6 text-2xl font-semibold ">
                              <img className="w-8 h-8 mr-2" src="https://i.ibb.co/9bsHTd9/Blood-Donation-Logo-png2.png" alt="logo" />
                              <p className="text-black">  BloodPulse</p>
                        </a>
                        <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-red-500 ">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                                          Sign in to your account
                                    </h1>
                                    <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" >
                                          <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Your email</label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      id="email"
                                                      className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                                                      placeholder="name@company.com"
                                                      required=""
                                                />
                                          </div>
                                          <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white">Password</label>
                                                <input
                                                      type="password"
                                                      name="password"
                                                      id="password"
                                                      placeholder="••••••••"
                                                      className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                      required
                                                />
                                          </div>
                                          <div className="flex items-center justify-between">
                                                <div className="flex items-start">
                                                      <div className="flex items-center h-5">
                                                            <input
                                                                  id="remember"
                                                                  aria-describedby="remember"
                                                                  type="checkbox"
                                                                  className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 "
                                                                  required=""
                                                            />
                                                      </div>
                                                      <div className="ml-3 text-sm">
                                                            <label className="">Remember me</label>
                                                      </div>
                                                </div>
                                                <a className="text-sm font-medium  hover:underline ">Forgot password?</a>
                                          </div>
                                          <button
                                                type="submit"
                                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                          >
                                                Sign in
                                          </button>
                                          <p className="text-sm font-light ">
                                                Don’t have an account yet? <Link to="/registration"><a className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a></Link>
                                          </p>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Login;