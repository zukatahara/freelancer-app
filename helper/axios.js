import axios from "axios";

const token =
  typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem("accessToken"))
    : null;
const reLogin = () => {
  localStorage.removeItem("accessToken");
  window.history.pushState({}, "", "/login");
  window.location.reload();
};
export const getInstance = () => {
  if (!token) {
    reLogin();
  }
  const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};
export const getInstanceCheckAuth = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};
