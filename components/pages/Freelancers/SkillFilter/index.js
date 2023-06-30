"use client";
import React from "react";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch, BiSolidMinusCircle } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

export default function SkillFilter() {
  return (
    <div className={styles["filter-group"]}>
      <div className={styles["filter-title"]}>
        <h1>Các Freelancers Để Thuê</h1>
      </div>

      <div className={`${styles["filter-tags"]} d-flex flex-wrap`}>
        <FilterTag tagName="HTML" />
        <FilterTag tagName="Website Design" />
        <FilterTag tagName="Graphic Design" />
        <FilterTag tagName="PHP" />
      </div>

      <div className={`${styles["search-box"]} d-flex justify-content-between`}>
        <input type="text" placeholder="Tim freelancer"></input>
        <button>
          <BiSearch />
        </button>
      </div>

      <div className={`${styles["select-box"]}`}>
        <p className={styles["filter-type"]}>Bạn cần công việc gì?</p>
        <select class="default-input" id="skill_category">
          <option value="1">CNTT trang web &amp; Phần mềm</option>
          <option value="2">Di động</option>
          <option value="3">Sáng tác</option>
          <option value="4">Thiết kế</option>
          <option value="5">Nhập dữ liệu</option>
          <option value="6">Tìm nguồn sản phẩm &amp; Sản xuất</option>
          <option value="7">Bán hàng &amp; Tiếp thị </option>
          <option value="8">Kinh doanh, Kế toán &amp; Pháp lý</option>
          <option value="9">Thương mại &amp; dịch vụ</option>
          <option selected="" value="-1">
            Chọn một lĩnh vực công việc
          </option>
          <option value="-2">Tuỳ chỉnh</option>
        </select>

        <br></br>

        <select class="default-input" id="skill_subcategory">
          <option value="-1" selected="selected">
            Chọn một công việc
          </option>
          <option value="1">Xây dựng trang web</option>
          <option value="2">Xây dựng cửa hàng trực tuyến</option>
          <option value="3">Tăng lượt truy cập cho trang web của tôi</option>
          <option value="4">Viết phần mềm</option>
          <option value="5">Chuyển đổi Template thành Website</option>
          <option value="53">Tạo Template WordPress</option>
          <option value="54">Tạo Joomla Template</option>
          <option value="55">Tạo Drupal Template</option>
          <option value="56">Phát triển ứng dụng Mac</option>
        </select>
      </div>

      <div className={`${styles["skill-search"]}`}>
        <p className={styles["filter-type"]}>Kỹ năng</p>
        <input
          className={styles["input-cus"]}
          type="text"
          placeholder="Tìm kiếm kỹ năng ..."
        ></input>
        <button>Xem các kỹ năng</button>
      </div>

      <div className={`${styles["skill-search"]}`}>
        <p className={styles["filter-type"]}>Quốc gia</p>
        <input
          className={styles["input-cus"]}
          type="text"
          placeholder="Tìm quốc gia ..."
        ></input>
      </div>

      <div>
        <p className={styles["filter-type"]}>Bài thi</p>
        <div
          className={`${styles["location-search-box"]} d-flex justify-content-between`}
        >
          <input type="text" placeholder="Thêm địa điểm"></input>
          <button>
            <MdLocationOn />
          </button>
        </div>
      </div>

      <div className={`${styles["skill-search"]}`}>
        <p className={styles["filter-type"]}>Bài thi</p>
        <input
          className={styles["input-cus"]}
          type="text"
          placeholder="Tìm bài kiểm tra"
        ></input>
      </div>

      <div className={`${styles["select-box"]}`}>
        <p className={styles["filter-type"]}>Mức giá theo giờ (USD)</p>
        <select name="hourly_rate" class="default-input" id="hourly_rate">
          <option value="0" id="dafault_hourly_rate" selected="">
            Bất kì giá theo giờ nào
          </option>
          <option value="10"> &lt; $10/giờ</option>
          <option value="10-20"> $10-20/giờ</option>
          <option value="20-30"> $20-30/giờ</option>
          <option value="30-40"> $30-40/giờ</option>
          <option value="40"> &gt; $40/giờ</option>
        </select>
      </div>

      <div className={styles["rating"]}>
        <p className={styles["filter-type"]}>Phân hạng</p>
        <div>
          <button>
            <BiSolidMinusCircle />
          </button>
          <input
            className={styles["star-rate"]}
            type="checkbox"
            title="bookmark page"
          />
          <input
            className={styles["star-rate"]}
            type="checkbox"
            title="bookmark page"
          />
          <input
            className={styles["star-rate"]}
            type="checkbox"
            title="bookmark page"
          />
          <input
            className={styles["star-rate"]}
            type="checkbox"
            title="bookmark page"
          />
          <input
            className={styles["star-rate"]}
            type="checkbox"
            title="bookmark page"
          />
        </div>
      </div>

      <div className={styles["online-check"]}>
        <p className={styles["filter-type"]}>Trực tuyến</p>
        <label class="checkbox">
          <input className="form-check-input" type="checkbox"></input>
          Chỉ những freelancer trực tuyến
          <br></br>
          (để trò chuyện trực tuyến)
        </label>
      </div>
    </div>
  );
}

const FilterTag = (props) => {
  return (
    <div
      className={`${styles["filter-tag"]} d-flex align-item-center me-2 mb-2`}
    >
      <button>
        <AiOutlineClose />
      </button>
      <div className="d-flex align-item-center">
        <p>{props.tagName}</p>
      </div>
    </div>
  );
};
