import React from "react";
import styles from "./SectionHeader.module.css";

function SectionHeader(props) {
  return (
    <div className={styles["sectionheader"]}>
      <div className={styles["left-border"]}></div>
      <div>
        <h3>{props.headerText}</h3>
      </div>
      <div className={styles["right-border"]}></div>
    </div>
  );
}

export default SectionHeader;
