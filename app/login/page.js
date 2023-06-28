'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { BsFacebook } from 'react-icons/bs';
import { IoMdEyeOff, IoMdEye, IoIosWarning } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Hãy nhập tên người dùng hoặc email'),
  password: Yup.string().required('Hãy nhập mật khẩu'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false },
      );
      // Perform login
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-main']}>
        <div className={styles['login-container']}>
          <div className={`${styles['login-logo']}`}>
            <Image
              src='https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg'
              alt='logo'
              width={199}
              height={48}
            />
          </div>
          <div className={styles['login-session']}>
            <h2>Chào mừng trở lại</h2>
            <Link href={'#'} className={styles['login-fb']}>
              <BsFacebook size={23} />
              Đăng nhập bằng Facebook
            </Link>
            <div className={styles['line-text']}>
              <div className={styles['line']}></div>
              <div className={styles['text']}>HOẶC</div>
              <div className={styles['line']}></div>
            </div>

            {/* form login  */}
            <form className={styles['login-form']} onSubmit={handleLogin}>
              <div style={{ minHeight: '71px', marginBottom: '8px' }}>
                <input
                  type='text'
                  placeholder='Email hoặc tên đăng nhập'
                  onChange={e => setEmail(e.target.value)}
                  className={errors.email ? styles['input-error'] : ''}
                />

                <p className={styles['input-validate-error']}>
                  {errors.email ? (
                    <>
                      <IoIosWarning style={{ marginRight: '7px' }} />
                      {errors.email}
                    </>
                  ) : (
                    'error'
                  )}
                </p>
              </div>
              <div>
                <div className={styles['input-password']}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Mật khẩu'
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div
                    className={styles['show-password']}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? (
                      <IoMdEyeOff size={25} />
                    ) : (
                      <IoMdEye size={25} />
                    )}
                  </div>
                </div>
                <p className={styles['input-validate-error']}>
                  {errors.password ? (
                    <>
                      <IoIosWarning style={{ marginRight: '7px' }} />
                      {errors.password}
                    </>
                  ) : (
                    ' k '
                  )}
                </p>
              </div>

              {/* remember me and forget password */}
              <div className={styles['remember-forget']}>
                <label>
                  <input
                    type='checkbox'
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <span>Ghi nhớ tôi</span>
                </label>
                <p>Quên mật khẩu?</p>
              </div>
              <button>Đăng nhập</button>
            </form>
            <hr />
            <p
              style={{
                fontSize: '13px',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Bạn chưa có tài khoản?{' '}
              <Link href={'/signup'} style={{ textDecoration: 'none' }}>
                Đăng ký
              </Link>
            </p>

            {/* download on store */}
            <div className='d-flex justify-content-around'>
              <Link href={'#'}>
                <Image
                  src='/images/apple-app-store-badge.webp'
                  width='131'
                  height='44'
                  alt='logo appstore'
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src='/images/google-play-store-badge.webp'
                  width='131'
                  height='44'
                  alt='logo appstore'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
