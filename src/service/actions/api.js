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
    console.log(response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error);



    const valid = TokenService.getRefreshTokenValidity();

    // If refresh token is expired, clear tokens and perform necessary actions
    if (!valid && ((originalRequest.url !== "/api/register/") && (originalRequest.url !== "/password-reset/") && (originalRequest.url !== "/password-reset/confirm/") )) {
      TokenService.clearToken();
      // Perform any other necessary actions (e.g., redirect to login page)
      // window.location.href = "/login";
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


  // Check if the request is for registration
    // if (originalRequest.url === "/api/register/") {
    //   // Handle the error specific to the registration request
    //   // For example, display an error message to the user or perform necessary actions
    //   if (error.response.status === 400) {
    //     // Bad Request: Registration data is invalid or incomplete
    //     console.log("Registration failed. Please check your input.");
    //     // Display an error message to the user or perform other necessary actions
    //   } else if (error.response.status === 409) {
    //     // Conflict: Registration data conflicts with existing data
    //     console.log("Registration failed. Email or phone number is already in use.");
    //     // Display an error message to the user or perform other necessary actions
    //   } else {
    //     // Other registration-related errors
    //     console.log("Registration failed. Please try again later.");
    //     // Display a generic error message or perform other necessary actions
    //   }
    //   return Promise.reject(error);
    // }