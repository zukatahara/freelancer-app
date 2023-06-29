import Image from 'next/image';
import styles from './styles.module.css';

const CategoryJob = ({ icon, title, description }) => {
  return (
    <div className='row'>
      <div className='col-3'>
        <image src={icon} alt='icon' />
      </div>
      <div className='col-9'>
        <h2 className={styles['title']}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CategoryJob;
