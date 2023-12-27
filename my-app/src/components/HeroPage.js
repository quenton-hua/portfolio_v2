import React from "react";
import styles from "./HeroPage.module.css"; // Import CSS module

function HeroPage(props) {
  const openResume = () => {
    window.open(props.contactData["resume"], "_blank");
  };

  return (
    <section className={styles["hero"]} id={props.id}>
      <div className={styles["color-overlay"]}>
        <div className={styles["content-section"]}>
          <div>
            <h2>Hi, my name is </h2>
            <h1>
              <strong>Quenton Hua.</strong>
            </h1>

            <div>
              <p>
                I'm a passionate Computer Engineering student at Texas A&M University, with an interest in full-stack development.  I thrive in collaborative environments and eagerly look forward to future opportunities to expand my skills as a software engineer.
              </p>
            </div>
            <button className={styles["resume-button"]} onClick={openResume}>
              Resume
            </button>
          </div>
        </div>
        <div className={styles["picture-section"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
