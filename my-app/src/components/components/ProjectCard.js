import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { OctocatFill, ArrowUpRight } from "akar-icons";
import SkillChip from "./SkillChip";

function ProjectCard({ projectData, index }) {
  const [isGif, setIsGif] = useState(false);
  const [isEven, setIsEven] = useState(false);
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
    root: container,
  });

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
    cursor: projectData["demo-link"] === "none" ? "default" : "pointer"
  };

  const handlePictureClick = () => {
    window.open(projectData["demo-link"], "_blank"); // Opens Google in a new tab
  };

  return (
    <div
      ref={ref}
      className={styles["project-card"]}
      style={{
        ...projectCardStyling,
        transform: isInView
          ? "none"
          : `translateX(${isEven ? "200px" : "-200px"})`,
        opacity: isInView ? 1 : 0,
        transition:
          "transform 1.5s ease-in-out, opacity 1.5s ease-in-out, background-color 0.25s ease-in-out",
      }}
      onMouseEnter={() => setIsGif(true)}
      onMouseLeave={() => setIsGif(false)}
    >
      <div className={styles["picture-section"]}>
        <div
          style={pictureStyling}
          alt="project"
          onClick={projectData["demo-link"] === "none" ? null: handlePictureClick}
          title={projectData["demo-link"] === "none" ? "" : "Demo"}
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

export default ProjectCard;
