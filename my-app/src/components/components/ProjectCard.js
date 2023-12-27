import React, { useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { OctocatFill, ArrowUpRight } from "akar-icons";
import SkillChip from "./SkillChip";
import projectImage from "../../assets/projects/placeholder.png"; // Update the path to your image

function ProjectCard({ projectData, index }) {
  const [isGif, setIsGif] = useState(false);
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    if (index % 2 === 0) {
      setIsEven(true);
    }
  }, [index]);
  const imagePath = require(`/src/assets/projects/${projectData["img-file-name"]}`);
  const gifPath = require(`/src/assets/projects/${projectData["gif-file-name"]}`);
  const projectCardStyling = {
    flexDirection: isEven ? "row" : "row-reverse",
  };

  const footerStyling = {
    flexDirection: isEven ? "row" : "row-reverse",
  };

  const linksSectionStyling = {
    justifyContent: isEven ? "flex-start" : "flex-end",
  };

  const pictureStyling = {
    backgroundImage: isGif ? `url(${gifPath})` : `url(${imagePath})`,
  };

  const handlePictureClick = () => {
    window.open(projectData["demo-link"], "_blank"); // Opens Google in a new tab
  };

  return (
    <div
      className={styles["project-card"]}
      style={projectCardStyling}
      onMouseEnter={() => setIsGif(true)}
      onMouseLeave={() => setIsGif(false)}
    >
      <div className={styles["picture-section"]}>
        <div
          style={pictureStyling}
          alt="project"
          onClick={handlePictureClick}
        ></div>
      </div>
      <div className={styles["content-section"]}>
        <h4>{projectData["name"]}</h4>
        <div className={styles["skills-section"]}>
          {projectData["skills"].map((skill, index) => (
            <SkillChip key={index} skillData={skill} />
          ))}
        </div>
        <div className={styles["desc-section"]}>
          <p>{projectData["description"]}</p>
        </div>
        <div className={styles["footer"]} style={footerStyling}>
          <span>{projectData["date"]}</span>
          <div className={styles["links-section"]} style={linksSectionStyling}>
            <a
              href={projectData["github-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OctocatFill strokeWidth={2} size={36} />
            </a>

            <a
              href={projectData["demo-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight strokeWidth={2} size={36} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
