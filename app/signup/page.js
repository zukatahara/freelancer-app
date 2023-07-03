"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { BsFacebook } from "react-icons/bs";
import { IoMdEyeOff, IoMdEye, IoIosWarning } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { useContext, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { useCheckAuth } from "@/utils/useCheckAuth";
import { AuthContext } from "@/context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(" "),
  lastName: Yup.string().required(" "),
  password: Yup.string().min(6, "Phải dài tối thiểu 6 ký tự").required(" "),
  username: Yup.string()
  .required("Hãy nhập địa chỉ email"),
});

export default function SignupPage() {
  const router = useRouter();
  const { signup, loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!isAgree) {
        return setCheckAgree(true);
      }
      await validationSchema.validate(
        { username, password, firstName,lastName },
        { abortEarly: false }
      );
      // Perform login
      //Logic here
      const data = {
        firstName,
        lastName,
        username,
        password,
      };
      const res = await signup(data);
      if (!res?.success) {
        toast.warning(res?.message);
        return;
      }
      toast.success(res.message);
      // setTimeout(() => {
      //   router.push("/");
      // }, 8000);
    } catch (err) {
      console.log("err:", err);
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  const handleLoginFacebook = () => {
    toast.warning("Tính năng đang bảo trì!");
  };
  const loginGoogle = useGoogleLogin({
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
    onSuccess: (token) => loginWithGoogle(token.access_token),
    overrideScope: true,
  });
  useCheckAuth();
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-main"]}>
        <div className={styles["login-container"]}>
          <div className={`${styles["login-logo"]}`}>
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={199}
              height={65}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles["login-session"]}>
            <h2>Đăng ký</h2>
            <div
              className={styles["login-fb"]}
              onClick={handleLoginFacebook}
              style={{ cursor: "pointer" }}
            >
              <BsFacebook size={23} />
              Đăng nhập bằng Facebook
            </div>
            <div
              className={styles["login-gg"]}
              onClick={() => loginGoogle()}
              style={{ cursor: "pointer" }}
            >
              <FcGoogle size={23} />
              Đăng nhập bằng Google
            </div>
            <div className={styles["line-text"]}>
              <div className={styles["line"]}></div>
              <div className={styles["text"]}>HOẶC</div>
              <div className={styles["line"]}></div>
            </div>

            {/* form login  */}
            <form className={styles["login-form"]} onSubmit={handleSignup}>
              <div>
                <input
                  type="text"
                  placeholder="Họ"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors((prev) => {
                      return { ...prev, firstName: "" };
                    });
                  }}
                  className={errors.firstName ? styles["input-error"] : ""}
                />
                <p className={styles["input-validate-error"]}></p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tên"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors((prev) => {
                      return { ...prev, lastName: "" };
                    });
                  }}
                  className={errors.lastName ? styles["input-error"] : ""}

                />
                <p className={styles["input-validate-error"]}></p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email hoặc tên đăng nhập"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors((prev) => {
                      return { ...prev, username: "" };
                    });
                  }}
                  className={errors.username ? styles["input-error"] : ""}
                />

                <p
                  className={styles["input-validate-error"]}
                  style={{
                    visibility: errors.username ? "visible" : "hidden",
                  }}
                >
                  {/* <IoIosWarning style={{ marginRight: "7px" }} />
                  {errors.email} */}
                </p>
              </div>
              <div>
                <div className={`${styles["input-password"]}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => {
                        return { ...prev, password: "" };
                      });
                    }}
                    className={errors.password ? styles["input-error"] : ""}
                  />
                  <div
                    className={styles["show-password"]}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? (
                      <IoMdEyeOff size={25} />
                    ) : (
                      <IoMdEye size={25} />
                    )}
                  </div>
                </div>
                <p
                  className={styles["input-validate-error"]}
                  style={{
                    visibility: errors.password ? "visible" : "hidden",
                  }}
                >
                  {/* <IoIosWarning style={{ marginRight: "7px" }} /> */}
                  {errors.password}
                </p>
              </div>

              {/* remember me and forget password */}
              <div
                className={`${styles["remember-forget"]} ${
                  checkAgree ? styles["remember-forget-error"] : ""
                } `}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={isAgree}
                    onChange={(e) => {
                      if (e.target.checked) setCheckAgree(false);
                      setIsAgree(!isAgree);
                    }}
                  />
                  <span
                    className={checkAgree ? "text-danger" : ""}
                    style={{ fontSize: "13px", color: "#fff" }}
                  >
                    Tôi đồng ý với <Link href="#">Thỏa thuận Người Dùng</Link>{" "}
                    và <Link href="#">Chính Sách Riêng Tư</Link> của Freelancer
                  </span>
                </label>
              </div>
              {errors.message && (
                <div className={styles["error-message"]}>
                  <RiErrorWarningFill
                    color="#eb3730"
                    size={40}
                    style={{ marginTop: "-7px " }}
                  />
                  <p>{errors.message}</p>
                  <span
                    className={styles["button-close"]}
                    onClick={() => setErrors({ ...errors, message: "" })}
                  >
                    &#10006;
                  </span>
                </div>
              )}

              <button type="submit">Tham gia Freelancer</button>
            </form>
            {/* <hr /> */}
            <div
              className={styles["line-text"]}
              style={{ margin: "2rem 0 1rem 0" }}
            >
              <div className={styles["line"]}></div>
              <div className={styles["line"]}></div>
            </div>
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginBottom: "24px",
                color: "#fff",
              }}
            >
              Bạn đã có tài khoản?{" "}
              <Link href={"/login"} style={{ textDecoration: "none" }}>
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
