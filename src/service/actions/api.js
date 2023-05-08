import axios from 'axios';


const api = axios.create({
  baseURL: 'https://staging.merielectricity.in/',
  
   headers: {
    'Content-Type': 'application/json',
  },
});

// Function to refresh the access token
const refreshAccessToken = async () => {
  // Send a request to your server to refresh the access token
  const response = await axios.post('https://your-api-url.com/refreshToken', {
    refreshToken: localStorage.getItem('refreshToken'),
  });

  // Update the access token in local storage
  localStorage.setItem('access_token', response.data.accessToken);

  // Return the new access token
  return response.data.accessToken;
};

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Add the access token to the request headers
    if (localStorage.getItem('access_token')) {
      console.log("setting access token in Bearer",(localStorage.getItem('access_token')))
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }
    // config.headers = cors();
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
    // If the error is a 401 and we haven't already retried the request
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh the access token
        const accessToken = await refreshAccessToken();

        // Add the new access token to the request headers
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // Retry the original request
        return api(originalRequest);
      } catch (error) {
        // If refreshing the token fails, log the user out
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload();
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