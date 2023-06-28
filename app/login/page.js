import Image from 'next/image';
import styles from './style.module.css';

export default function LoginPage() {
  return (
    <div className={styles['login-page']}>
      <div className={styles['login-container']}>
        <div className={styles['login-form']}>
          <Image
            src='https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg'
            alt='logo'
            width={199}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
