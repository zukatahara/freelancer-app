'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { BsFacebook } from 'react-icons/bs';
import { IoMdEyeOff, IoMdEye, IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useState } from 'react';
import Link from 'next/link';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Phải dài tối thiểu 6 ký tự')
    .required('Hãy nhập mật khẩu'),
  email: Yup.string()
    .email('Hãy nhập địa chỉ email hợp lệ')
    .required('Hãy nhập địa chỉ email'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isAgree, setIsAgree] = useState(false);

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
            <h2>Đăng ký</h2>
            <Link href={'#'} className={styles['login-fb']}>
              <BsFacebook size={23} />
              Tiếp tục với Facebook
            </Link>
            <div className={styles['line-text']}>
              <div className={styles['line']}></div>
              <div className={styles['text']}>HOẶC</div>
              <div className={styles['line']}></div>
            </div>

            {/* form login  */}
            <form className={styles['login-form']} onSubmit={handleLogin}>
              <div>
                <input
                  type='text'
                  placeholder='Email hoặc tên đăng nhập'
                  onChange={e => {
                    setEmail(e.target.value);
                    setErrors(prev => {
                      return { ...prev, email: '' };
                    });
                  }}
                  className={errors.email ? styles['input-error'] : ''}
                />

                <p
                  className={styles['input-validate-error']}
                  style={{
                    visibility: errors.email ? 'visible' : 'hidden',
                  }}
                >
                  <IoIosWarning style={{ marginRight: '7px' }} />
                  {errors.email}
                </p>
              </div>
              <div>
                <div
                  className={`${styles['input-password']} ${
                    errors.password ? styles['input-error'] : ''
                  }`}
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Mật khẩu'
                    onChange={e => {
                      setPassword(e.target.value);
                      setErrors(prev => {
                        return { ...prev, password: '' };
                      });
                    }}
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
                <p
                  className={styles['input-validate-error']}
                  style={{
                    visibility: errors.password ? 'visible' : 'hidden',
                  }}
                >
                  <IoIosWarning style={{ marginRight: '7px' }} />
                  {errors.password}
                </p>
              </div>

              {/* remember me and forget password */}
              <div className={styles['remember-forget']}>
                <label>
                  <input
                    type='checkbox'
                    checked={isAgree}
                    onChange={() => setIsAgree(!isAgree)}
                  />
                  <span className='text-danger' style={{ fontSize: '13px' }}>
                    Tôi đồng ý với{' '}
                    <Link href={'/about/terms'}>Thỏa thuận Người Dùng</Link> và{' '}
                    <Link href={'/about/privacy'}>Chính Sách Riêng Tư</Link> của
                    Freelancer
                  </span>
                </label>
              </div>
              {errors.message && (
                <div className={styles['error-message']}>
                  <RiErrorWarningFill
                    color='#eb3730'
                    size={40}
                    style={{ marginTop: '-7px ' }}
                  />
                  <p>{errors.message}</p>
                  <span
                    className={styles['button-close']}
                    onClick={() => setErrors({ ...errors, message: '' })}
                  >
                    &#10006;
                  </span>
                </div>
              )}

              <button type='submit'>Tham gia Freelancer</button>
            </form>
            <hr />
            <p
              style={{
                fontSize: '13px',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Bạn đã có tài khoản?{' '}
              <Link href={'/login'} style={{ textDecoration: 'none' }}>
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
