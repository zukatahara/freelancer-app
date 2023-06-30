import { IoSearch, IoLocationSharp } from 'react-icons/io5';
import styles from './styles.module.css';

const Search = () => {
  return (
    <div id={styles['search-form']}>
      <form className={styles['form-group']}>
        <div className={styles['group-input']}>
          <div
            className={styles['input']}
            style={{ borderRight: '1px solid #DEDEDE' }}
          >
            <IoSearch className='mx-2' color='#cccccc' size={30} />
            <input type='text' placeholder='Từ khóa tìm kiếm' />
          </div>
          <div className={`${styles['input']} `}>
            <IoLocationSharp className='mx-2' color='#cccccc' size={30} />
            <input type='text' placeholder='Online Job' />
          </div>
        </div>
        <button className={styles['btn-search']}>Tìm kiếm</button>
      </form>
    </div>
  );
};

export default Search;
