"use client";

import { AuthLogin } from "@/api/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Elsie_Swash_Caps } from "next/font/google";

const initialValue = {
  user: {},
  accessToken: "",
  loading: true,
};

export const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const router = useRouter();
  console.log(`vao day`);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    const accessToken = JSON.stringify(localStorage.getItem("accessToken"));

    if (accessToken == "null") {
      router.push("/login");
      return;
    }
    setToken(accessToken);
  }, []);
  const login = async (username,password) => {
    console.log("🚀 ~ file: AuthContext.js:32 ~ login ~ username,password:", username,password)
    const res = await AuthLogin(username, password);

    setUser(res?.data);
    setToken(res?.accessToken);
    setLoading(false);
    localStorage.setItem("accessToken", res?.accessToken);
    
  };
  const AuthContextData = {
    loading,
    user,
    token,
    login,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
