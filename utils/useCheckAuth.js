"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useCheckAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(
    "🚀 ~ file: useCheckAuth.js:10 ~ useCheckAuth ~ pathname:",
    pathname
  );
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!loading) {
  //     if (user && router.route === "/login") {
  //       router.replace("/");
  //     } else if (
  //       !user &&
  //       router.route !== "/login" &&
  //       router.route !== "/register"
  //     ) {
  //       // router.replace("/login");
  //     }
  //   }
  // }, [router, user, loading]);
  useEffect(() => {
    if (Object.keys(user).length) {
      // đã có dữ liệu người dùng
      if (pathname.includes("/login") || pathname.includes("/signup")) {
        router.replace("/");
      }
    } else {
      if (pathname.includes("/signup")) {
        router.push("/signup");
      } else {
        router.push("/login");
      }
    }
  }, [router, user, pathname]);

  return { user };
};
