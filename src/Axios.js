import axios from "axios";

<<<<<<< HEAD
const baseURL = "http://192.168.0.111:8001/api";

=======
const baseURL = "http://192.168.12.15:8000/api";
>>>>>>> d17746bbb0b843f94b2a0c82fe2c3cd35911de6e
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : " Bearer 31|1V7yFvpyYax7fKQ2zkrzY2HIKWzicg7E56o3gWaf829e390c"
  },
});

export default axiosInstance;