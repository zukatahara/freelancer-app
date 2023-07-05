import React from "react";
import {
  BsGlobe,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

import "./footer.css";

export default function Footer({ pathname }) {
  const contents = [
    {
      title: "Freelancer",
      items: [
        { url: "", content: "Lĩnh vực" },
        { url: "", content: "Dự án" },
        { url: "", content: "Cuộc thi" },
        { url: "", content: "Các freelancer" },
        { url: "", content: "Doanh nghiệp" },
        { url: "", content: "Thành viên" },
        { url: "", content: "Chương trình freelancer ưa thích" },
        { url: "", content: "Quản lý dự án" },
        { url: "", content: "Công việc địa phương" },
        { url: "", content: "Hình ảnh khắp nơi" },
        { url: "", content: "Giới thiệu dự án" },
        { url: "", content: "API cho các nhà phát triển" },
        { url: "", content: "Xác thực" },
        { url: "", content: "Ứng dụng desktop" },
      ],
    },
    {
      title: "Giới thiệu",
      items: [
        { url: "", content: "Về chúng tôi" },
        { url: "", content: "Cách thức hoạt động" },
        { url: "", content: "Công việc" },
        { url: "", content: "Bảo mật" },
        { url: "", content: "Nhà đầu tư" },
        { url: "", content: "Sơ đồ trang" },
        { url: "", content: "Các câu chuyện" },
        { url: "", content: "Tin tức" },
        { url: "", content: "Đội ngũ" },
        { url: "", content: "Giải thưởng" },
        { url: "", content: "Thông cáo báo chí" },
        { url: "", content: "Công việc" },
      ],
    },
    {
      title: "Điều khoản",
      items: [
        { url: "", content: "Chính sách bảo mật" },
        { url: "", content: "Điều khoản và điều kiện" },
        { url: "", content: "Chính sách bản quyền" },
        { url: "", content: "Quy tắc ứng xử" },
        { url: "", content: "Các loại phí" },
      ],
    },
    {
      title: "Đối tác",
      items: [
        { url: "", content: "Escrow.com" },
        { url: "", content: "Loadshift" },
        { url: "", content: "Warrior Forum" },
      ],
    },
  ];

  return (
    <div
      className="container-footer"
      style={{
        display:
          pathname.includes("login") ||
          pathname.includes("signup") ||
          pathname.includes("dashboard")
            ? "none"
            : "flex",
      }}
    >
      <div className="footer pt-3 container-custom container">
        <div className="footer1 py-4 px-1">
          <div className="footer1-wrapper d-flex flex-wrap row">
            <div className="footer-col col-lg-2 col-12 px-2 mb-3 pb-3">
              <div className="mb-4 d-flex justify-content-left">
                <a href="/">
                  <img
                    className="freelancer-logo"
                    src="/freelancer-logo-light.svg"
                    alt="freelacer-logo-light.svg"
                  />
                </a>
              </div>
              <div className="text-item mb-3">
                <BsGlobe className="me-3" />
                <a>Vietnam / Tiếng Việt</a>
              </div>
              <div className="text-item mb-3">
                <BsFillQuestionCircleFill className="me-3" />
                <a>Giúp đỡ & Hỗ trợ</a>
              </div>
              <div className="text-item mb-3">
                <PiPersonArmsSpreadFill className="me-3" />
                <a>Trợ năng</a>
              </div>
            </div>
            {contents.map((val, idx) => {
              return (
                <div
                  className="footer-col col-lg-2 col-md-3 col-12 px-2 mb-3 pb-3"
                  key={idx}
                >
                  <p className="title-column">{val.title}</p>
                  {val.items.map((item, index) => {
                    return (
                      <div className="text-item mb-1" key={index}>
                        <a href={item.url}>{item.content}</a>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div className="col-lg-2 col-12 px-2">
              <div>
                <p className=" title-column">Ứng Dụng</p>
              </div>
              <div className="mb-4">
                <img src="/app-store.svg"></img>
              </div>
              <div className="mb-4">
                <img src="/google-play.svg"></img>
              </div>
              <div>
                <BsFacebook className="me-3" />
                <BsTwitter className="me-3" />
                <BsYoutube className="me-3" />
                <BsInstagram className="me-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer2">
          <div className="footer2-container">
            <div className="d-flex flex-wrap row pt-4">
              <div className="col-12 col-md-3 mb-3">
                <p className="text-14">67.389.624</p>
                <p>Người Dùng Đã Đăng Ký</p>
              </div>
              <div className="col-12 col-md-3 mb-3">
                <p className="text-14">22.785.127</p>
                <p>Tổng Số Việc Đã Đăng</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p className="text-11">
                  Freelancer ® is a registered Trademark of Freelancer
                  Technology Pty Limited (ACN 142 189 759)
                </p>
                <p className="text-11">
                  Copyright © 2023 Freelancer Technology Pty Limited (ACN 142
                  189 759)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
