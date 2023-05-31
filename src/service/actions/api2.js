const apiUrl = 'http://localhost:8000/';
// const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];

const headers = {
  'Content-Type': 'application/json',
//   'X-CSRFToken': csrfToken
};

const api = {
  // Function to refresh the access token
  refreshAccessToken: async () => {
    // Send a request to your server to refresh the access token
    const response = await fetch(`${apiUrl}api/login/refresh/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        refresh: localStorage.getItem('refresh_token')
      })
    });

    if (!response.ok) {
      throw new Error('Failed to refresh access token');
    }

    // Update the access token in local storage
    const data = await response.json();
    localStorage.setItem('access_token', data.accessToken);

    // Return the new access token
    return data.accessToken;
  },

  // Function to make API requests
  request: async (url, method, data) => {
    const accessToken = localStorage.getItem('access_token');
    const requestOptions = {
      method,
      headers: {
        ...headers,
        // Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    };

    // Send the request
    const response = await fetch(`${apiUrl}${url}`, requestOptions);

    if (!response.ok) {
      if (response.status === 405) {
        // Refresh the access token
        try {
          const newAccessToken = await api.refreshAccessToken();

          // Retry the original request with the new access token
          requestOptions.headers.Authorization = `Bearer ${newAccessToken}`;
          return fetch(`${apiUrl}${url}`, requestOptions);
        } catch (error) {
          // If refreshing the token fails, log the user out
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.reload();
        }
      } else {
        throw new Error('API request failed');
      }
    }

    // Return the response data
    return response.json();
  }
};

export default api;
