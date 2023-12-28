// import React, { useState, useEffect } from "react";
// import styles from "./NavBar.module.css"; // Import CSS module
// import {
//   LinkedinBoxFill,
//   GithubFill,
//   LinkOut,
//   MoonFill,
//   ThreeLineHorizontal,
// } from "akar-icons";
// import { PiMoonFill } from "react-icons/pi";
// import { Link } from "react-scroll";

// function Navbar(props) {
//   const [scrolled, setScrolled] = useState(false);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);

//   const toggleHamburger = () => {
//     setHamburgerOpen(!hamburgerOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = 5; // Set the offset value (5 pixels from the top)
//       if (window.scrollY > offset) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={scrolled ? styles["scrolled"] : ""}>
//       <div className={styles["left-section"]}>
//         QUENTON
//         <br /> HUA
//       </div>
//       <div className={styles["middle-section"]}>
//         <ul className={styles["nav-list"]}>
//           <li>
//             <Link
//               activeClass={styles["active"]}
//               smooth
//               spy
//               to="home"
//               offset={-80}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass={styles["active"]}
//               smooth
//               spy
//               to="projects"
//               offset={-80}
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass={styles["active"]}
//               smooth
//               spy
//               to="experience"
//               offset={-80}
//             >
//               Experience{" "}
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass={styles["active"]}
//               smooth
//               spy
//               to="contact"
//               offset={-80}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//         {/* <div className="hamburger" onClick={toggleHamburger}>
//           <ThreeLineHorizontal size={32} />
//         </div> */}
//       </div>
//       <div className={styles["right-section"]}>
//         <div className={styles["icons-section"]}>
//           <div className={styles["dark-mode-button"]}>
//             <PiMoonFill size={20} />
//           </div>

//           <LinkedinBoxFill strokeWidth={2} size={32} color={"#0072b1"} />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { PiMoonFill } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css"; // Import CSS module

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

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
        <Navbar.Brand href="#home" className={styles["left-section"]}>
          QUENTON
          <br /> HUA
        </Navbar.Brand>

        <Navbar.Toggle className={styles["middle-section"]} />
        <Navbar.Collapse className={styles["middle-section"]}>
          <Nav>
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("projects")}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("experience")}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home" className={styles["right-section"]}>
          <div className={styles["icons-section"]}>
            <div className={styles["dark-mode-button"]}>
              <PiMoonFill size={20} />
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
