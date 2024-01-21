import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./MoreProjectCard.module.css";
import { OctocatFill, ArrowUpRight } from "akar-icons";
import SkillChip from "./SkillChip";

function MoreProjectsCard({ projectData }) {
    const imagePath = require(`/src/assets/projects/${projectData["img-file-name"]}`);
  return (
    <div className={styles["moreProjectsCard"]}  style={{ backgroundImage: `url(${imagePath})`}}>
      <div className={styles["content"]}>
        <div className={styles["desc"]}>
          <h5>{projectData.name}</h5>
          <div className={styles["skills-section"]}>
            {projectData["skills"].map((skill, index) => (
              <SkillChip key={index} skillData={skill} />
            ))}
          </div>
          <p>
            {projectData["description"]}
          </p>
        </div>

        <div className={styles["footer"]}>
          <span>{projectData["date"]}</span>
          <div className={styles["links-section"]}>
            {projectData["github-link"] !== "none" && (
              <a
                href={projectData["github-link"]}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <OctocatFill strokeWidth={2} size={36} />
              </a>
            )}

            {projectData["demo-link"] !== "none" && (
              <a
                href={projectData["demo-link"]}
                target="_blank"
                rel="noopener noreferrer"
                title="Demo"
              >
                <ArrowUpRight strokeWidth={2} size={36} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProjectsCard;
