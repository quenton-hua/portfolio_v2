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

function Timeline(props) {
  var contactPageBGColor = "#000135";
  const contentStyle = { background: "var(--projectCardHoverBGColor)" };
  function selectIcon(fileName) {
    return require(`../../assets/experience/${fileName}.png`);
  }

  if (props.selectedTheme === "dark"){
    contactPageBGColor = "#131323";
  } 

  return (
    <div className={styles["timeline"]}>
      <VerticalTimeline
        lineColor={contactPageBGColor}
        className={styles["timeline-custom-css"]}
      >
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            className={styles["vertical-timeline-element--work"]}
            contentStyle={contentStyle}
            contentArrowStyle={{
              borderRight: "7px solid var(--projectCardHoverBGColor)",
            }}
            date={experience["date"]}
            dateClassName={styles["timeline-date"]}
            iconStyle={{
              color: "#fff",
              backgroundColor: experience["company-color"],
              border: "5px solid var(--contactPageBGColor)",
            }}
            icon=""
          >
            <div className={styles["job-card"]}>
              <div className={styles["company-logo"]}>
                <div>
                  <img
                    src={selectIcon(experience["logo-file-name"])}
                    alt="Company Logo"
                  />
                </div>
              </div>

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
