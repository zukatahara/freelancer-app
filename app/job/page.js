import Breadcrumb from '@/components/UI/Breadcrumb';
import styles from './styles.module.css';
import { IoSearch } from 'react-icons/io5';
import CategoryJob from '@/components/pages/Job/Category';
import jobcate1 from '@/public/icons/jobcate1.svg';
const itemsBreadcrumb = [
  {
    href: '/',
    title: 'Freelancer',
  },
  {
    href: '/job',
    title: 'Các công việc',
  },
];

const jobCates = [
  {
    icon: jobcate1,
    title: 'Trang web, IT & Phần mềm',
    description: 'PHP, HTML, JavaScript, Kiến trúc phần mềm, WordPress...',
  },
  {
    icon: 'ưqq',
    title: 'Điện thoại di động & Máy tính',
    description: 'Mobile App Development, Android, iPhone, iPad, Kotlin...',
  },
  {
    icon: 'ưqq',
    title: 'Sáng tác & Nội dung',
    description:
      'Soạn thảo nội dung, Article Writing, Viết quảng cáo, Ghostwriting, Dịch thuật....',
  },
  {
    icon: 'ưqq',
    title: 'Thiết kế, Truyền thông & Kiến trúc',
    description:
      'Thiết kế đồ họa, Thiết kế trang web, Photoshop, Thiết kế logo, Illustrator...',
  },
  {
    icon: 'ưqq',
    title: 'Nhập liệu và Hành chính',
    description:
      'Nhập liệu, Excel, Xử lí dữ liệu, Tìm kiếm web, Hỗ trợ khách hàng...',
  },
  {
    icon: 'ưqq',
    title: 'Khoa học & Kĩ thuật',
    description: 'AutoCAD, Kĩ thuật, CAD/CAM, Kĩ thuật điện, Điện tử...',
  },
];

const JobPage = () => {
  return (
    <div id={styles['login-page']}>
      <section className={`${styles['section-view_search']}`}>
        <div className='container'>
          <Breadcrumb items={itemsBreadcrumb} />
          <h1>Xem theo Hạng mục</h1>
          <div class={`${styles['form-group']} ${styles['has-search']}`}>
            <IoSearch className={styles['form-control-search']} />
            <input
              type='text'
              className={styles['form-input-search']}
              placeholder='Tìm kiếm một hạng mục'
            />
          </div>

          <div className='row'>
            {jobCates.map(cate => (
              <div className='col-lg-4 col-md-6 col-12' key={cate?.title}>
                <CategoryJob
                  icon={cate.icon}
                  title={cate.title}
                  description={cate.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPage;
