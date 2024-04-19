import axios from "axios";

const baseURL = "http://192.168.1.14:8000/api";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 2|gmZIiloJ1lQhtZcOAmkWc0e2fl3q5B76Y4A9YKFH4db4169b"
  },
});

export default axiosInstance;