import Link from 'next/link';
import styles from './styles.module.css';

const HeaderForCateJobs = () => {
  return (
    <section className={styles['header']}>
      <div className={`${styles['header-main']} container-xl`}>
        <h1>.NET Jobs</h1>
        <div className={styles['header-button-group']}>
          <Link href={'/post-project'}>
            <button className={styles['button-hire']}>Tôi muốn Thuê</button>
          </Link>
          <Link href={'/signup'}>
            <button className={styles['button-work']}>Tôi muốn Làm việc</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderForCateJobs;
