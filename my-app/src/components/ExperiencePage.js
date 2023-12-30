import React from "react";
import Timeline from "./components/Timeline.js";
import styles from "./ExperiencePage.module.css";
import SectionHeader from "./components/SectionHeader.js";


function ExperiencePage(props) {
  return (
    <section className={styles["experience"]} id={props.id} >
      <SectionHeader headerText="Experience" />
      <Timeline selectedTheme={props.selectedTheme}  />
    
    </section>
  );
}

export default ExperiencePage;
