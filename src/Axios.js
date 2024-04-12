import axios from "axios";

const baseURL = "http://192.168.12.15:8000/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 3|Di92xfugKYb842pQZL2P491BrL2mHYc9ss8r1T2x616842d8"
  },
});

export default axiosInstance;