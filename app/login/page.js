"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { BsFacebook } from "react-icons/bs";
import {
  IoMdEyeOff,
  IoMdEye,
  IoIosWarning,
  IoIosArrowBack,
} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { RiErrorWarningFill } from "react-icons/ri";
import { useContext, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCheckAuth } from "@/utils/useCheckAuth";
import { useGoogleLogin } from "@react-oauth/google";
const validationFormLoginSchema = Yup.object().shape({
  username: Yup.string().required(" "),
  password: Yup.string().required(" "),
});
const validationEmailSchema = Yup.object().shape({
  email: Yup.string().required("Hãy nhập địa chỉ email của bạn."),
});

export default function LoginPage() {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailForGet, setEmailForget] = useState("");
  const [errors, setErrors] = useState("");
  const [isForget, setIsForget] = useState(false);
  //
  const loginGoogle = useGoogleLogin({
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
    onSuccess: (token) => loginWithGoogle(token.access_token),
    overrideScope: true,
  });
  const handleLoginFacebook = () => {
    toast.warning("Tính năng đang bảo trì!");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await validationFormLoginSchema.validate(
        { username, password },
        { abortEarly: false }
      );
      const res = await login(username, password);
      if (!res?.success) {
        toast.warning(res?.message);
      } else {
        router.push("/");
      }

      // Perform login
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      validationErrors.message =
        "Email, tên đăng nhập hoặc mật khẩu không đúng.";
      setErrors(validationErrors);
    }
  };

  const handleForget = async (e) => {
    e.preventDefault();
    try {
      await validationEmailSchema.validate(
        { email: emailForGet },
        { abortEarly: false }
      );
      // Perform login
    } catch (err) {
      err.inner.forEach((error) => {
        if (error.path === "email") {
          setErrors({ ...errors, email: error.message });
          return;
        }
      });
    }
  };
  useCheckAuth();
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-main"]}>
        <div className={styles["login-container"]}>
          <div className={`${styles["login-logo"]}`}>
            {isForget && (
              <IoIosArrowBack
                size={20}
                className={styles["icon-back"]}
                onClick={() => setIsForget(false)}
              />
            )}
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={199}
              height={65}
              style={{ objectFit: "contain" }}
            />
          </div>
          {isForget ? (
            <div className={styles["login-session"]}>
              <h2 className="mb-3">Tạo lại mật khẩu của bạn</h2>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "#fff" }}
              >
                Nhập địa chỉ email Freelancer.com của bạn để chúng tôi có thể
                tạo lại mật khẩu cho bạn.
              </p>
              <form className={styles["login-form"]} onSubmit={handleForget}>
                <div>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    className={errors.email ? styles["input-error"] : ""}
                    onChange={(e) => setEmailForget(e.target.value)}
                  />
                  <p
                    className={styles["input-validate-error"]}
                    style={{
                      visibility: errors.email ? "visible" : "hidden",
                    }}
                  >
                    <IoIosWarning style={{ marginRight: "7px" }} />
                    {errors.email}
                  </p>
                </div>
                <button type="submit">Tiếp Theo</button>
              </form>
            </div>
          ) : (
            <div className={styles["login-session"]}>
              <h2>Chào mừng trở lại</h2>
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
              <form className={styles["login-form"]} onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
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
                    {/* <IoIosWarning style={{ marginRight: "7px" }} /> */}
                    {errors.username}
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
                <div className={styles["remember-forget"]}>
                  <label>
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    <span>Ghi nhớ tôi</span>
                  </label>
                  <p
                    onClick={() => {
                      setIsForget(true);
                      setErrors({});
                    }}
                  >
                    Quên mật khẩu?
                  </p>
                </div>
                {errors.message && (
                  <div className={styles["error-message"]}>
                    <RiErrorWarningFill
                      color="#eb3730"
                      size={40}
                      style={{ marginTop: "-7px " }}
                    />
                    <p style={{ color: "#fff" }}>{errors.message}</p>
                    <span
                      className={styles["button-close"]}
                      onClick={() => setErrors({ ...errors, message: "" })}
                    >
                      &#10006;
                    </span>
                  </div>
                )}

                <button type="submit">Đăng nhập</button>
              </form>
              <div
                className={styles["line-text"]}
                style={{ margin: "2rem 0 1rem 0" }}
              >
                <div className={styles["line"]}></div>
                <div className={styles["line"]}></div>
              </div>
              {/* <hr className={styles.divider}/> */}
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  marginBottom: "24px",
                  color: "#fff",
                }}
              >
                Bạn chưa có tài khoản?{" "}
                <Link href={"/signup"} style={{ textDecoration: "none" }}>
                  Đăng ký
                </Link>
              </p>

              {/* download on store */}
              <div className="d-flex justify-content-around">
                <Link href={"#"}>
                  <Image
                    src="/images/apple-app-store-badge.webp"
                    width="131"
                    height="44"
                    alt="logo appstore"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src="/images/google-play-store-badge.webp"
                    width="131"
                    height="44"
                    alt="logo appstore"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
