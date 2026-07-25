import api from "./api";

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const googleLogin = async (credential) => {
  const response = await api.post("/auth/google", {
    credential,
  });

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};