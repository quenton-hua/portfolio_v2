import React, { useState, useEffect } from "react";
import { PiMoonFill, PiSun } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./NavBar.module.css"; // Import CSS module
import QHLogo from "../assets/QHLogo";

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
          {/* QUENTON
          <br /> HUA */}
          <QHLogo className={styles["qhlogo"]}/>
          
        </Navbar.Brand>

        <Navbar.Toggle className={styles["nav-items-icons"]} onClick={() => props.setNavIconClicked(!props.navIconClicked)} />
        <Navbar.Collapse className={styles["middle-section"]}>
          <Nav >
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




{/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}