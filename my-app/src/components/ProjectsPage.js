import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./ProjectsPage.module.css";
import ProjectCard from "./components/ProjectCard";
import projectsData from "../utils/projects.json";
import SectionHeader from "./components/SectionHeader";
import ProjectDivider from "./components/ProjectDivider";
import MoreProjectsCard from "./components/MoreProjectCard";

function ProjectsPage(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [flexVal, setFlexVal] = useState("0");
  useEffect(() => {
    if (isInView) {
      setFlexVal("1");
    }
  }, [isInView]);

  return (
    <section className={styles["projects"]} id={props.id}>
      <div>
        <SectionHeader headerText="Featured Projects" />

        <div className={styles["project-cards-section"]}>
          {projectsData
            .filter((project) => project.featured)
            .map((project, index, filteredArray) => (
              <div key={index}>
                <ProjectCard projectData={project} index={index} />
                {index !== filteredArray.length - 1 && <ProjectDivider />}
              </div>
            ))}
        </div>
      </div>
      <div  ref={ref}>
        <div className={styles["moreProjectsHeader"]}>
          <div
            className={styles["sectionheader"]}
            style={{
              transform: isInView ? "none" : "translatey(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h2> Other Projects</h2>
          </div>

          <div
            className={styles["border"]}
            ref={ref}
            style={{
              flex: flexVal,
              transform: isInView ? "none" : "none",
              opacity: isInView ? 1 : 1,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          ></div>
        </div>
        <div className={styles["moreProjectsSection"]}>
          {projectsData
            .filter((project) => !project.featured)
            .map((project, index, filteredArray) => {
              // Calculate a delay based on the index
              const delay = (index + 1) * 0.3; // 0.2s delay increment for each card

              return (
                <div
                  key={index}
                  style={{
                    transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.5}s `,
                    opacity: isInView ? 1 : 0,
                  }}
                >
                  <MoreProjectsCard projectData={project} index={index} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
