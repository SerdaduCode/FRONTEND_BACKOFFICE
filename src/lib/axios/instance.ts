import Axios from "axios";
import Cookies from "js-cookie";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: 0,
};

let instance = Axios.create({
  baseURL: "http://localhost:8080",
  headers,
  timeout: 60 * 1000,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (request) => {
    request.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return request;
  },

  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
