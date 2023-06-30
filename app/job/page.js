'use client';
import Breadcrumb from '@/components/UI/Breadcrumb';
import styles from './styles.module.css';
import { IoSearch } from 'react-icons/io5';
import CategoryJob from '@/components/pages/Job/Category';
import { jobCates } from '@/db';
import JobsByCate from '@/components/pages/Job/JobByCate';
import { useState } from 'react';
import ListJob from '@/components/pages/Job/JobByCate/ListJob';

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

const JobPage = () => {
  const [listJob, setListJob] = useState([]);

  const handleSearch = e => {
    const keyword = e.target.value.trim();
    if (!keyword) return setListJob([]);
    const newListJob = [];
    jobCates.forEach(cate => {
      return cate.jobs.filter(job => {
        if (job.name.toLowerCase().includes(keyword.toLowerCase()))
          newListJob.push(job);
      });
    });
    setListJob(newListJob);
  };

  const handleScrollToCate = id => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div id={styles['job-page']}>
      <section className={`${styles['section-view_search']}`}>
        <div className='container-xl'>
          <Breadcrumb items={itemsBreadcrumb} />
          <h1>Xem theo Hạng mục</h1>
          <div class={`${styles['form-group']} ${styles['has-search']}`}>
            <IoSearch className={styles['form-control-search']} />
            <input
              type='text'
              className={styles['form-input-search']}
              placeholder='Tìm kiếm một hạng mục'
              onChange={handleSearch}
            />
          </div>
          <ListJob jobs={listJob} />
          <div className={`row ${listJob.length > 0 ? 'mt-5' : ''}`}>
            {jobCates.map(cate => (
              <div
                className='col-lg-4 col-md-6 col-12'
                key={cate?.hrefId}
                style={{ cursor: 'pointer' }}
                onClick={() => handleScrollToCate(cate?.hrefId)}
              >
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

      <section className={`${styles['section-view_all']} `}>
        <div className='container-xl'>
          <h2 className='mb-3'>Xem tất cả các hạng mục</h2>

          {jobCates.map(cate => (
            <div key={cate?.hrefId} id={cate?.hrefId}>
              <JobsByCate title={cate.title} jobs={cate.jobs} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobPage;
