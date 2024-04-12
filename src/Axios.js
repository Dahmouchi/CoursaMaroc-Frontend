import axios from "axios";

const baseURL = "http://192.168.1.11:8000/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json",
    "Authorization" : "Bearer 2|hHOJVxl5ht7jLvcEm67hIKZ9FjA2bbktb38ZyimBd71bf380"
  },
});

export default axiosInstance;