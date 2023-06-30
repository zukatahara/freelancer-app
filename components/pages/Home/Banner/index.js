import React from 'react';
import style from './style.module.css';
import Link from 'next/link';
export default function BannerComponent() {
  return (
    <div className={style.banner}>
      <video
        src='https://www.f-cdn.com/assets/main/en/assets/home/video/nasa-v3.mp4'
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover' }}
      ></video>

      <div className={style.content}>
        <div className='container-custom container'>
          <div className='row'>
            <div className='col-xl-6'>
              <div className={style['content-main']}>
                <h1>
                  Thuê các freelancer giỏi nhất cho công việc bất kỳ qua mạng.
                </h1>
                <ul>
                  <li>Thị trường freelance lớn nhất thế giới</li>
                  <li>Bất kỳ công việc nào mà bạn có thể nghĩ đến</li>
                  <li>Tiết kiệm đến 90% & nhận báo giá miễn phí</li>
                  <li>Chỉ thanh toán khi thấy hài lòng 100%</li>
                </ul>
              </div>
            </div>
            <div className={style.desc}>
              <p>Thiết kế kiến trúc này với chi phí 500 USD trong 15 ngày</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
