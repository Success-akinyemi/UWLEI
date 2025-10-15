import axios from "axios";
import { BASE_URL } from "./url";

// Create axios instance
const apiCall = axios.create({
  baseURL: BASE_URL,
});

// Add interceptor for expired access tokens
apiCall.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("UWLEIREFRESH");

    // If token expired (401 Unauthorized) and refresh token exists
    if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Request a new access token using the refresh token
        const { data } = await axios.post(`${BASE_URL}/main/token/refresh/`, {
          refresh: refreshToken,
        });

        // Save the new access token
        localStorage.setItem("UWLEIACCESS", data.access);

        // Retry the failed request with new token
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return apiCall(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default apiCall;
