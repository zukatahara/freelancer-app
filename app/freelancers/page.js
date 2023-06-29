import React from "react";
import SkillFilter from "@/components/pages/Freelancers/SkillFilter";
import styles from "./styles.module.css";

export default function Freelancers() {
  return (
    <div className={styles["freelancer-wrapper"]}>
      <div className={`${styles["freelancer-body"]} row`}>
        <div className={`${styles["left-col"]} col-4`}>
          <SkillFilter />
        </div>
      </div>
    </div>
  );
}
