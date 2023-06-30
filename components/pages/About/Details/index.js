import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./styles.module.css";
export default function DetailsComponentOfAboutPage() {
  return (
    <>
      <div className="col-md-9 col-12">
        <div className={style.content}>
          <h5>Giải đáp báo chí:</h5>
          <p>
            Đối với thắc mắc báo chí, hãy gửi email cho chúng tôi về{" "}
            <Link href="#">press@freelancer.com</Link>
          </p>
          <div className={style.provenance}>
            <h5>Tieenf thaan</h5>
            <p>
              Freelancer.com đã mua lại nhiều thị trường thuê ngoài như
              GetAFreelancer.com và EUFreelance.com (được thành lập bởi Magnus
              Tibell vào năm 2004 tại Thụy Điển), LimeExchange (trước đây là
              công ty của Lime Labs LLC, Mỹ), Scriptlance.com (được thành lập
              bởi Rene Trescases vào năm 2001 tại Canada, một trong những đơn vị
              tiên phong đầu tiên trong lĩnh vực freelance), Freelancer.de
              Booking Center (Đức), Freelancer.co.uk (Anh), Webmaster-talk.com
              (USA), một diễn đàn dành cho những nhà quản trị web, Rent-A-Coder
              và vWorker (được thành lập bởi Ian Ippolito, Mỹ, một đơn vị đột
              phá khác trên thị trường freelance).
            </p>
            <Image
              alt=""
              src="https://www.f-cdn.com/assets/img/vworker-d197e4d5.png"
              height="93"
              width="116"
            />
          </div>
        </div>
      </div>
      <div className="col-md-3 col-12">
        <div className={style.address}>
          <h5>Freelancer Limited</h5>
          <p>
            <strong>Đăng ký văn phòng tại</strong>
            <br />
            Level 37
            <br />
            Grosvenor Place
            <br />
            225 George Street
            <br />
            Sydney, NSW 2000
            <br />
            Australia
            <br />
            ACN 141 959 042
            <br />
            <Link href="#">support@freelancer.com</Link>
          </p>
        </div>
      </div>
    </>
  );
}
