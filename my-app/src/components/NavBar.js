import React, { useState, useEffect } from "react";
import { PiMoonFill, PiSun } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css"; // Import CSS module

function NavBar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default active link is 'home'

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70;
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
    setActiveLink(sectionId); // Set the clicked link as active
  };

  function changeTheme() {
    if (props.selectedTheme === "light") {
      props.setSelectedTheme("dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      props.setSelectedTheme("light");
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = 5; // Set the offset value (5 pixels from the top)
      if (window.scrollY > offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`${scrolled ? styles["scrolled"] : ""} ${styles["navbar"]}`}
    >
      <Container className={styles["container"]}>
        <Navbar.Brand
          onClick={() => handleNavClick("home")}
          className={styles["left-section"]}
        >
          QUENTON
          <br /> HUA
        </Navbar.Brand>

        <Navbar.Toggle className={styles["middle-section"]} />
        <Navbar.Collapse className={styles["middle-section"]}>
          <Nav>
            <Nav.Link
              onClick={() => handleNavClick("home")}
              className={`${styles["nav-item"]} ${
                activeLink === "home" ? styles["active"] : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("projects")}
              className={`${styles["nav-item"]} ${
                activeLink === "projects" ? styles["active"] : ""
              }`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("experience")}
              className={`${styles["nav-item"]} ${
                activeLink === "experience" ? styles["active"] : ""
              }`}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("contact")}
              className={`${styles["nav-item"]} ${
                activeLink === "contact" ? styles["active"] : ""
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand className={styles["right-section"]}>
          <div className={styles["icons-section"]}>
            <div className={styles["dark-mode-button"]} onClick={changeTheme}>
              {props.selectedTheme === "light" ? (
                <PiMoonFill size={20} />
              ) : (
                <PiSun size={20} />
              )}
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
