import React from "react";
import SkillFilter from "@/components/pages/Freelancers/SkillFilter";
import FreelancerContent from "@/components/pages/Freelancers/FreelancerContent";
import styles from "./styles.module.css";

export default function Freelancers() {
  return (
    <div className={styles["freelancer-wrapper"]}>
      <div className={`${styles["freelancer-body"]} row`}>
        <div className={`${styles["left-col"]} col-4`}>
          <SkillFilter />
        </div>
        <div className={`${styles["right-col"]} col-8`}>
          <FreelancerContent />
        </div>
      </div>
    </div>
  );
}
