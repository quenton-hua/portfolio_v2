import React from "react";
import styles from "./HeroPage.module.css"; // Import CSS module
import { motion } from "framer-motion";

function HeroPage(props) {
  const openResume = () => {
    window.open(props.contactData["resume"], "_blank");
  };

  return (
    <section className={styles["hero"]} id={props.id}>
      <div className={styles["color-overlay"]}>
        <div className={styles["content-section"]}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                yoyo: Infinity, // Infinity makes it bounce indefinitely
                ease: "easeInOut", // You can adjust the easing function
              }}
            >
              <h2>Hi, my name is </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
              }}
            >
              <h1>
                <strong>Quenton Hua.</strong>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 2,
              }}
            >
              <div>
                <p>
                  I'm a passionate Computer Engineering student at Texas A&M
                  University, with an interest in full-stack development. I
                  thrive in collaborative environments and eagerly look forward
                  to future opportunities to expand my skills as a software
                  engineer.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.1,
              }}
            >
              <button className={styles["resume-button"]} onClick={openResume}>
                Resume
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          <div className={styles["picture-section"]}>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                transform: "translate(-50%, -50%) rotate(25deg)", // Corrected transform syntax
              }}
              transition={{
                duration: 0.8,
                delay: 2.3,
              }}
            ></motion.div>

            <div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroPage;
