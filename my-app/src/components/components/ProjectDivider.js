import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "../ProjectsPage.module.css";

function ProjectDivider() {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, root: container });
  return (
    <div
      className={styles["divider"]}
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : `translateX(200px)`, // Adjusted translateX value with "px" unit
        opacity: isInView ? 1 : 0,
        transition: `all 1.5s ease-in-out ${isInView ? "0.25s" : "0s"}`, // Added delay
        width: isInView ? "900px" : "0", // Expand width when in view
      }}
    ></div>
  );
}

export default ProjectDivider;

