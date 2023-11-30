// UseAxiosSecure.js
import axios from "axios";


const axiosSecure = axios.create({
      baseURL: 'https://blood-donation-server-ten.vercel.app'
});

axiosSecure.interceptors.request.use(
      function (config) {
            const token = localStorage.getItem("access-token");
            config.headers.authorization = `Bearer ${token}`;
            return config;
      },
      function (error) {
            return Promise.reject(error);
      }
);


axiosSecure.interceptors.response.use(
      function (response) {
            return response;
      },
      async (error) => {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                  return '/';
            }
            return Promise.reject(error);
      }
);

export default axiosSecure;
