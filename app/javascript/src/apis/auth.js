import axios from "axios";

const logout = () => axios.delete(`/session`);

const login = payload =>
  axios.post("/session", {
    login: payload,
  });

const signup = payload =>
  axios.post("/users", {
    user: payload,
  });

const authApi = {
  login,
  logout,
  signup,
};

export default authApi;
