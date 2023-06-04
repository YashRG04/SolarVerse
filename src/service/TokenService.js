import jwtDecode from "jwt-decode";

export const TokenService = (function tokenService() {
  let service;
  function getServiceFunc() {
    if (!service) {
      service = this;
      return service;
    }
    return service;
  }

  const setToken = (tokenobj) => {
    if (tokenobj.access) {
      localStorage.setItem("access_token", tokenobj.access);
    }
    if (tokenobj.refresh) {
      localStorage.setItem("refresh_token", tokenobj.refresh);
    }
  };

  const getAccessToken = () => localStorage.getItem("access_token");

  const getRefreshToken = () => localStorage.getItem("refresh_token");

  const getTokenValidity = (tokenobj) => {
    const decodedToken = jwtDecode(tokenobj);
    const dateNow = new Date();
    const timeStamp = dateNow.getTime() / 1000;
    console.log("Checkng token validity");
    console.log(decodedToken.exp);
    if (decodedToken.exp < timeStamp) {
      return false;
    }
    return true;
  };

  const getAccessTokenValidity = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
      return getTokenValidity(accessToken);
    }
    return null;
  };

  const getRefreshTokenValidity = () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      return getTokenValidity(refreshToken);
    }
    return null;
  };

  const clearToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return {
    getService: getServiceFunc,
    setToken,
    getAccessToken,
    getRefreshToken,
    getAccessTokenValidity,
    getRefreshTokenValidity,
    clearToken,
  };
})();
