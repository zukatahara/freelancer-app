import axios from "axios";

const token =
  typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem("accessToken"))
    : null;
// const reLogin = () => {
//   localStorage.getItem("accessToken");
// };
export const getInstance = () => {
  console.log("🚀 ~ file: axios.js:4 ~ token:", token);

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
