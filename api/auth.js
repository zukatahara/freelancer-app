import { getInstanceCheckAuth } from "@/helper/axios";

export async function AuthLogin(username, password) {
  const res = await getInstanceCheckAuth().post("/login", {
    username,
    password,
  });
  return res?.data;
}
export async function authSignup(data) {
  const res = await getInstanceCheckAuth().post("/register", data);
  return res?.data;
}
export async function getLoggedUser() {
  const res = await getInstanceCheckAuth().post("/logged");
  return res?.data;
}
export const signInWithGoogle = async ({ tokenId }) => {
  const res = await getInstanceCheckAuth().post("/loginWithGoogle", {
    tokenId,
  });
  return res?.data;
};
