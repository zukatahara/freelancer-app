'use client';
import Link from 'next/link';
import { GoTriangleRight } from 'react-icons/go';
import styles from '../styles.module.css';
import { useEffect, useState } from 'react';
const ListJob = ({ jobs }) => {
  const [data, setData] = useState(jobs);
  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  return (
    <ul className='row '>
      {data.map(job => (
        <>
          <li className='col-lg-4 col-md-6 col-6'>
            <Link
              href={job.href ? `/job/${job.href}` : '#'}
              className={styles['link']}
            >
              <GoTriangleRight
                color='ffc24e'
                style={{ margin: '4px 8px 0 0' }}
              />
              <p className='mb-2'> {`${job?.name} (${job?.quantity})`}</p>
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default ListJob;
