'use client';

import React, { useState } from 'react';
import styles from './style.module.css';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import BannerForCateJobs from '@/components/pages/Job/Slug/Banner';
import HeaderForCateJobs from '@/components/pages/Job/Slug/Header';
import Breadcrumb from '@/components/UI/Breadcrumb';

const itemsBreadcrumb = [
  {
    title: 'Freelancer',
    href: '/',
  },
  {
    title: 'Công việc',
    href: '/job',
  },
  {
    title: '.NET',
    href: '/job/dot-net',
  },
];
const CategoryDetailJobs = () => {
  const [isOpenBanner, setIsOpenBanner] = useState(true);
  return (
    <div id={styles['cate-page']}>
      {isOpenBanner && <BannerForCateJobs setIsOpenBanner={setIsOpenBanner} />}
      <HeaderForCateJobs />
      <section className={styles['section-main']}>
        <div className='container'>
          <Breadcrumb items={itemsBreadcrumb} />
        </div>
      </section>
    </div>
  );
};

export default CategoryDetailJobs;
