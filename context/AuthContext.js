"use client";

import { AuthLogin, getLoggedUser,authSignup } from "@/api/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const initialValue = {
  user: {},
  accessToken: "",
  loading: true,
};

export const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    const accessToken = JSON.stringify(localStorage.getItem("accessToken"));
    if (accessToken == "null") {
      router.push("/login");
      return;
    } else {
      loggedUser();
    }
    setToken(accessToken);
  }, []);
  const login = async (username, password) => {
    const res = await AuthLogin(username, password);
    if (res?.status === 1) {
      setUser(res);
      setToken(res?.jwtToken);
      setLoading(false);
      localStorage.setItem("accessToken", res?.jwtToken);
    }

    return res;
  };
  const signup = async (data) =>{
    const res = await authSignup(data);
    console.log(`res`,res)
  }
  const loggedUser = async () => {
    // const res = await getLoggedUser();
    // return res;

    setUser({ firstName: "a", lastName: "b" });
    setToken("123avc");
    localStorage.setItem("accessToken", "123avc");

    return;
  };
  const logout = async () => {
    localStorage.removeItem("accessToken");
    setUser({});
    setToken("");

    return;
  };
  const AuthContextData = {
    loading,
    user,
    token,
    login,
    signup,
    logout,
    loggedUser,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
