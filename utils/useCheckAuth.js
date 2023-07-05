"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useCheckAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (Object.keys(user).length) {
      // đã có dữ liệu người dùng
      if (
        pathname.includes("/login") ||
        pathname.includes("/signup") ||
        pathname === "/"
      ) {
        console.log(`vao day`);
        router.replace("/dashboard");
      }
    } else {
      if (pathname.includes("/signup")) {
        router.push("/signup");
      } else if (pathname.includes("/login")) {
        router.push("/login");
      } else {
        router.push("/");
      }
    }
  }, [router, user, pathname]);

  return { user };
};
