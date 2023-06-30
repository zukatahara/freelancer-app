import { VscClose } from 'react-icons/vsc';
import Link from 'next/link';
import styles from './styles.module.css';
const BannerForCateJobs = ({ setIsOpenBanner }) => {
  return (
    <section className={styles['banner']}>
      <div className='container-xl'>
        <div className={`${styles['banner-main']} row`}>
          <div className='col-7'>
            <h2>Cần thuê một freelancer cho công việc này?</h2>
            <p>
              Miễn phí khi đăng ký, hãy nhập vào những gì bạn cần và nhận các
              báo giá miễn phí trong tích tắc
            </p>
          </div>
          <div className='col-5 d-flex justify-content-center align-items-center'>
            <form className={styles['banner-form']}>
              <input type='text' placeholder='Bạn muốn thuê việc gì?' />
              <button className={styles['banner-form-btn']}>
                Đăng dự án ngay
              </button>
            </form>
          </div>
        </div>
      </div>
      <VscClose
        size={32}
        className={styles['btn-close']}
        color='#f7f7f7'
        onClick={() => setIsOpenBanner(false)}
      />
    </section>
  );
};

export default BannerForCateJobs;
