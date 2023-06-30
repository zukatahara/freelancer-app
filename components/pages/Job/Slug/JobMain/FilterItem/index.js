import styles from './styles.module.css';

const FilterItem = ({ title }) => {
  return (
    <div className={styles['filter-item']}>
      <div className={styles['filter-item-checkbox']}>
        <input type='checkbox' name='price' id='price' />
        <label>{title}</label>
      </div>
      <div className='row my-3 align-items-center'>
        <div className='col-5 '>
          <input
            type='number'
            placeholder='tối thiểu'
            className={styles['filter-input_number']}
          />
        </div>
        <div className='col-2'>đến</div>
        <div className='col-5'>
          <input
            type='number'
            placeholder='tối đa'
            className={styles['filter-input_number']}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
