import Image from 'next/image';
import styles from './styles.module.css';

const CategoryJob = ({ icon, title, description }) => {
  return (
    <div className='row mb-3'>
      <div className='col-2'>
        <Image src={icon} alt='icon' width={56} height={56} />
      </div>
      <div className='col-10'>
        <h2 className={styles['title']}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CategoryJob;
