import React, { useState, useRef, useEffect } from "react";
import styles from "./Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SkillChip from "./SkillChip";
import headshot from "../../assets/headshot.png";
import experienceData from "../../utils/experience.json";

//logos

function Timeline() {
  const contentStyle = { background: "rgb(221, 238, 253)" };
  function selectIcon(fileName) {
    return require(`../../assets/experience/${fileName}.png`);
  }

  return (
    <div className={styles["timeline"]}>
      <VerticalTimeline
        lineColor="#03045e"
        className={styles["timeline-custom-css"]}
      >
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            className={styles["vertical-timeline-element--work"]}
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid rgb(221, 238, 253)" }}
            date={experience["date"]}
            dateClassName={styles["timeline-date"]}
            iconStyle={{
              color: "#fff",
              backgroundColor: experience["company-color"],
              border: "5px solid #03045e",
            }}
            icon=""
          >
            <div className={styles["job-card"]}>
              <img
                src={selectIcon(experience["logo-file-name"])}
                alt="Company Logo"
              />
              <h4>
                {experience["job-title"]} • {experience["company"]}
              </h4>
              <div className={styles["skills-section"]}>
                {experience["skills"].map((skill, index) => (
                  <SkillChip key={index} skillData={skill} />
                ))}
              </div>
              <p>{experience["description"]}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
