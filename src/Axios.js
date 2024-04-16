import axios from "axios";

const baseURL = "http://192.168.0.111:8001/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 31|1V7yFvpyYax7fKQ2zkrzY2HIKWzicg7E56o3gWaf829e390c"
  },
});

export default axiosInstance;