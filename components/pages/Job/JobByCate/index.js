'use client';
import styles from './styles.module.css';
import ListJob from './ListJob';
const JobsByCate = ({ title, jobs }) => {
  return (
    <div className={styles['jobs-by-cate']}>
      <h3 className={styles['title']}>{title || ''}</h3>
      <hr className='my-4' />

      <ListJob jobs={jobs} />
    </div>
  );
};

export default JobsByCate;
