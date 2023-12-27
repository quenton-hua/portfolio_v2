import React from "react";
import styles from "./SkillChip.module.css";

function SkillChip(props) {
  return (
    <span className={styles["skillchip"]}>{props.skillData}</span>
  );
}

export default SkillChip;