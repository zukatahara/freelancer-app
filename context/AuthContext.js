"use client";

import {
  AuthLogin,
  getLoggedUser,
  authSignup,
  signInWithGoogle,
} from "@/api/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const initialValue = {
  user: {},
  accessToken: "",
};
export const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    const accessToken = JSON.stringify(localStorage.getItem("accessToken"));
    if (accessToken != "null") {
      loggedUser();
    }
  }, []);
  const login = async (username, password) => {
    const res = await AuthLogin(username, password);
    if (res?.success) {
      setUser(res);
      setToken(res?.jwtToken);
      setLoading(false);
      localStorage.setItem("accessToken", res?.jwtToken);
    }

    return res;
  };
  const signup = async (data) => {
    const res = await authSignup(data);
    if (res?.success) {
      setUser(res);
      setToken(res?.jwtToken);
      localStorage.setItem("accessToken", res?.jwtToken);
    }
    return res;
  };
  const loggedUser = async () => {
    const res = await getLoggedUser();
    setUser(res);
    setToken(res?.jwtToken);
    localStorage.setItem("accessToken", res?.jwtToken);
    return res;
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    setUser({});
    setToken("");
    return;
  };
  //
  const loginWithGoogle = async (idToken) => {
    try {
      const res = await signInWithGoogle({
        tokenId: idToken,
      });
      if (res.success) {
        setUser(res);
        setToken(res?.jwtToken);
        localStorage.setItem("accessToken", res?.jwtToken);
        router.push("/");
      }
      return res;
    } catch (error) {
      console.log(error);
      toast.error("Vui lòng thử lại");
    }
  };
  const AuthContextData = {
    loading,
    user,
    token,
    login,
    signup,
    logout,
    loggedUser,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
