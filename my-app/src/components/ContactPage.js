import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./ContactPage.module.css";
import { LinkedinBoxFill, GithubFill, Phone, Envelope } from "akar-icons";

function ContactPage(props) {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    root: container,
  });

  const icons = [
    {
      icon: <LinkedinBoxFill strokeWidth={1} size={36} />,
      link: props.contactData["linkedin"],
      name: "LinkedIn"
    },
    {
      icon: <GithubFill strokeWidth={1} size={36} />,
      link: props.contactData["github"],
      name: "GitHub"
    },
    {
      icon: <Phone strokeWidth={1} size={36} />,
      link: `tel:+1${props.contactData["phone"]}`,
      name: `${props.contactData["phone"]}`
    },
    {
      icon: <Envelope strokeWidth={1} size={36} />,
      link: `mailto:${props.contactData["email"]}`,
      name: `${props.contactData["email"]}`
    },
  ];

  return (
    <section id={props.id} className={styles["contact"]} ref={ref}>
      <div className={styles["triangle"]}></div>
      <div className={styles["content"]}>
        <h3
          style={{
            transform: isInView ? "none" : "translatey(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Contact
        </h3>
        <div className={styles["contact-icons"]}>
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              title={item.name}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transform: isInView ? "none" : "translatey(10px)",
                opacity: isInView ? 1 : 0,
                transition: `transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  0.8 + index * 0.2
                }s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  0.8 + index * 0.2
                }s, color 0.25s ease-in-out`, // Specify opacity transition here// Adjust the delay here
              }}
              className={styles["icon"]}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p>Designed & Built by Quenton Hua</p>
      </div>
    </section>
  );
}

export default ContactPage;
