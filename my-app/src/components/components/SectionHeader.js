import React from "react";
import styles from "./SectionHeader.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionHeader(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={styles["sectionheader"]}
      style={{
        transform: isInView ? "none" : "translatey(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div
        className={styles["left-border"]}
        style={{
          transform: isInView ? "none" : "translateX(-250px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      ></div>
      <div>
        <h3>{props.headerText}</h3>
      </div>
      <div
        className={styles["right-border"]}
        style={{
          transform: isInView ? "none" : "translateX(250px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      ></div>
    </div>
  );
}

export default SectionHeader;
