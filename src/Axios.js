import axios from "axios";

const baseURL = "http://192.168.12.15:8000/api";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 24|55lOLB0DSTapJDVwQHqrD6qgARt9Q60aRTB8Mj3C42220f75"
  },
});

export default axiosInstance;