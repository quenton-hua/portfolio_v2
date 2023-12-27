import React from "react";
import styles from "./ContactPage.module.css";
import { LinkedinBoxFill, GithubFill, Phone, Envelope } from "akar-icons";

function ContactPage(props) {
  return (
    <section id={props.id} className={styles["contact"]}>
      <div className={styles["triangle"]}></div>
      <div className={styles["content"]}>
        <h2>Contact</h2>
        <div className={styles["contact-icons"]}>
          <a
            href={props.contactData["linkedin"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinBoxFill strokeWidth={1} size={36} />
          </a>
          <a
            href={props.contactData["github"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFill strokeWidth={1} size={36} />
          </a>
          <a
            href={`tel:+1${props.contactData["phone"]}`}
          >
            <Phone strokeWidth={1} size={36} />
          </a>
          <a
            href={`mailto:${props.contactData["email"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Envelope strokeWidth={1} size={36} />
          </a>
        </div>

        <p>Designed & Built by Quenton Hua</p>
      </div>
    </section>
  );
}

export default ContactPage;
