import Axios from "axios";
import { setupInterceptor } from "./instance";

let instance = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

instance = setupInterceptor(instance);
export default instance;
