import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./ProjectsPage.module.css";
import ProjectCard from "./components/ProjectCard";
import projectsData from "../utils/projects.json";
import SectionHeader from "./components/SectionHeader";
import ProjectDivider from "./components/ProjectDivider";

function ProjectsPage(props) {
  return (
    <section className={styles["projects"]} id={props.id}>
      <SectionHeader headerText="Featured Projects" />

      <div className={styles["project-cards-section"]} >
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard projectData={project} index={index} />
            {index !== projectsData.length - 1 && (
             <ProjectDivider />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
