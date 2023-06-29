'use client';
import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './styles.module.css';
const Breadcrumb = ({ items }) => {
  return (
    <div id={styles['breadcrumb']}>
      {items?.length > 0 &&
        items.map((item, index) => {
          return (
            <>
              <Link href={item.href}>{item.title}</Link>
              {index < items.length - 1 ? (
                <MdOutlineKeyboardArrowRight />
              ) : null}
            </>
          );
        })}
    </div>
  );
};

export default Breadcrumb;
