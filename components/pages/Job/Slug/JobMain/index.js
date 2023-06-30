import FilterItem from './FilterItem';
import styles from './styles.module.css';

const SectionJobMain = () => {
  return (
    <div className='row'>
      <div className={`col-3`}>
        <div className={styles['section-left']}>
          <div className={styles['section-content']}>
            <h5>Tìm kiếm gần đây của tôi</h5>
            <div className={styles['job-filter']}>
              <hr className='mb-4 mt-5' />
              <h5>Lọc theo:</h5>
              <h5 className={styles['h5-title']}>Ngân sách</h5>
              <FilterItem title={'Dự án giá cố định'} />
              <FilterItem title={'Dự án theo giờ'} />
              <select className={`${styles['filter-input_number']} mb-3`}>
                <option value={'all'}>Tất cả thời gian</option>
                <option value={'all'}>Ít hơn 1 tuần</option>
                <option value={'all'}>1 đến 4 tuần</option>
                <option value={'all'}>1 đến 3 tháng</option>
                <option value={'all'}>3 đến 6 tháng</option>
                <option value={'all'}>Trên 6 tháng / Tiếp tục</option>
                <option value={'all'}>Không nói rõ</option>
              </select>
              <FilterItem title={'Các cuộc thi'} />
            </div>
            <div className={styles['job-filter']}>
              <hr className='mb-4 mt-4' />
              <h5 className={styles['h5-title']}>Loại</h5>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Công việc địa phương</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Các Công Việc Nổi Bật</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Công Việc Có Tuyển Dụng Viên</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Công Việc Toàn Thời Gian</label>
              </div>
            </div>
            <div className={styles['job-filter']}>
              <hr className='mb-4 mt-4' />
              <h5 className={styles['h5-title']}>Kỹ năng</h5>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>.NET 5.0/6</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>.NET</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>PHP</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>HTML</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>CSS</label>
              </div>
              <input
                type='text'
                placeholder='Hoặc nhập kỹ năng '
                className={`${styles['filter-input_number']} mt-3`}
              />
            </div>
            <div className={styles['job-filter']}>
              <hr className='mb-4 mt-4' />
              <h5 className={styles['h5-title']}>Ngôn ngữ</h5>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>English</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Spanish</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>German</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>French</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='checkbox' name='price' id='price' />
                <label>Portuguese</label>
              </div>
              <input
                type='text'
                placeholder='Hoặc nhập ngôn ngữ '
                className={`${styles['filter-input_number']} mt-3`}
              />
            </div>
            <div className={styles['job-filter']}>
              <hr className='mb-4 mt-4' />
              <h5 className={styles['h5-title']}>Tình trạng công việc</h5>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='radio' name='statusJob' />
                <label>Các công việc đang mở</label>
              </div>
              <div className={`mb-1 ${styles['filter-item-checkbox']}`}>
                <input type='radio' name='statusJob' />
                <label>Các công việc đang mở và đã đóng</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-9'>
        <div className='section-right'></div>
      </div>
    </div>
  );
};

export default SectionJobMain;
