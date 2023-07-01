import { getInstanceCheckAuth } from "@/helper/axios";

export async function AuthLogin(username, password) {
  const res = await getInstanceCheckAuth().post("/login", {
    username,
    password,
  });
  return res?.data;
}
export async function getLoggedUser() {
  const res = await getInstanceCheckAuth().post("/logged");
  return res?.data;
}
