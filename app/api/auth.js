import client from "./client";

const login = (email, password) => {
  return client.post("/auth", { email, password });
};

const register = (name, email, password) => {
  return client.post("/users", { name, email, password });
};

export default {
  login,
  register,
};
