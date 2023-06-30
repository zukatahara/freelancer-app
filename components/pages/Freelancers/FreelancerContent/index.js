import React from "react";
import Pagination from "@/components/pages/Freelancers/Pagination";
import styles from "./styles.module.css";
import { TbCircleFilled } from "react-icons/tb";
import { IoMdStar } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";

export default function FreelancerContent() {
  return (
    <div className={styles["freelancer-content-wrapper"]}>
      <Pagination />
      <div className={styles["freelancer-list"]}>
        <FreelancerItem />
      </div>
      <Pagination />
    </div>
  );
}

const FreelancerItem = () => {
  const content = {
    username: "seojohn061",
    avatar:
      "https://cdn3.f-cdn.com/ppic/174814586/logo/2648792/profile_logo_2648792.jpg",
    country:
      "https://cdn5.f-cdn.com/img/flags/png/in.png?v=b0c4b5f62b04db2b53390284a5e9cc3c&m=6&buildVersion=e7f0ca7c81b629b0aeea9db2f9a6c31a27c3a83b",
    tagList: "#1st Rank + SEO | SMO | SMM | Google Ads|WordPress",
    rating: "4.9",
    progressEarning: 100,
    earning: 8.3,
  };

  return (
    <div className={`${styles["freelancer-item-wrapper"]} d-flex`}>
      <div className={`${styles["freelancer-item-avatar"]}`}>
        <img src={content.avatar}></img>
      </div>
      <div className={styles["freelancer-detail"]}>
        <div className={styles["freelancer-detail-header"]}>
          <div
            className={`${styles["freelancer-detail-header1"]} d-flex justify-content-between`}
          >
            <div>
              <TbCircleFilled />
              <a href="">{content.username}</a>
              <img src={content.country}></img>
            </div>
            <div>
              <button className="d-flex justify-content-between">
                <div className={styles["btn-icon"]}>
                  <img src=""></img>
                </div>
                <div className={styles["btn-content"]}>Thuê tôi</div>
              </button>
            </div>
          </div>
          <div className={styles["freelancer-header-taglist"]}>
            {content.tagList}
          </div>
        </div>
        <div className={`${styles["freelancer-card-stats"]} d-flex`}>
          <div className={`${styles["freelancer-rating"]} d-flex`}>
            <div>{content.rating}</div>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>

          <div className={`${styles["freelancer-earnings"]} d-flex`}>
            <p>{content.earning}</p>
            <FiDollarSign />
            <div className={`${styles["freelancer-progress"]} d-flex`}>
              <span
                style={{ width: `${content.progressEarning * 0.54}px` }}
              ></span>
            </div>
          </div>
        </div>
        <div className={styles["freelancer-top-skills"]}></div>
        <div className={styles["freelancer-profile"]}></div>
      </div>
    </div>
  );
};
