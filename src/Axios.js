import axios from "axios";

const baseURL = "http://192.168.12.15:8000/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 2|EN27SDgrmxraKM3xUtdUoEOWDBdA927IQoQ6go9C2857c307"
  },
});

export default axiosInstance;