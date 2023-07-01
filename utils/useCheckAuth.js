import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export const useCheckAuth = () => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  console.log(
    "🚀 ~ file: useCheckAuth.js:8 ~ useCheckAuth ~ loading:",
    loading
  );
  useEffect(() => {
    if (!loading) {
      console.log(`loading`);
      if (user && router.route === "/login") {
        console.log(`loading000`);
        router.replace("/");
      } else if (
        !user &&
        router.route !== "/login" &&
        router.route !== "/register"
      ) {
        console.log(`loading0000`);
        // router.replace("/login");
      }
    }
  }, [router, user, loading]);

  return { user, loading };
};
