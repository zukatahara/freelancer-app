import axios from "axios";

const token =
  typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem("accessToken"))
    : null;
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer abc123`,
  },
});

export const getInstanceCheckAuth = () => {
  const instance = axios.create({
    baseURL: "https://some-domain.com/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};
