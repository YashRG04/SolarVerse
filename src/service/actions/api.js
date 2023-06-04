import axios from "axios";
import { TokenService } from "../TokenService";

// axios.defaults.withCredentials = true;
// // Set the CSRF token from the cookie as a default header
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // 'Origin':'http://localhost:3000'
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    //get the access token from local storage
    const access_token = TokenService.getAccessToken();
    console.log("axios header token" + access_token);
    
    if (access_token) {
      // if the access token exists, add it to the header
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    const valid = TokenService.getRefreshTokenValidity();

    // If refresh token is expired, clear tokens and perform necessary actions
    if (!valid) {
      TokenService.clearToken();
      // Perform any other necessary actions (e.g., redirect to login page)
      window.location.href = "/login";
      console.log("Refresh token expired");
    }

    // If the error is due to an expired access token and refresh token is available
    if (error.response.status === 401 && !originalRequest.retry) {
      // Check if access_token exists before refreshing
      if (TokenService.getAccessToken()) {
        originalRequest.retry = true;
        return api({
          url: "/login/refresh/",
          method: "post",
          data: {
            refresh: TokenService.getRefreshToken(),
          },
        }).then((res) => {
          if (res.status === 200) {
            TokenService.setToken(res.data);
            api.defaults.headers.common.Authorization = `Bearer ${TokenService.getAccessToken()}`;
            return api(originalRequest);
          }
          return null;
        });
      } else {
        // Handle the scenario when tokens are not available
        // ...
      }
    }

    return Promise.reject(error);
  }
);

export default api;

//   const response = await api.post('/api/login', {
//         email,
//         password,
//       });

// const access_token = localStorage.getItem("access_token");
//     if (!access_token) {
//       throw new Error("No access token found");
//     }
