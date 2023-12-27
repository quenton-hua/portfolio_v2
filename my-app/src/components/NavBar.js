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
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css"; // Import CSS module
import React, { useState, useEffect } from "react";
import { PiMoonFill } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`${scrolled ? styles["scrolled"] : ""} ${styles["navbar"]}
    `}
    >
      <Container className={styles["container"]}>
        <Navbar.Brand href="#home" className={styles["left-section"]}>
          QUENTON
          <br /> HUA
        </Navbar.Brand>
{/* TODO: SWAP THE Navbar.Toggle and its content position with the Navbar.Brand below at screen size 991.5px, otherwise keep it in current */}
        <Navbar.Toggle className={styles["middle-section"]}/>
        <Navbar.Collapse className={styles["middle-section"]}>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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

// import React, { useState } from 'react'
// import {
//   CNavbar,
//   CContainer,
//   CNavbarBrand,
//   CNavbarToggler,
//   CCollapse,
//   CNavbarNav,
//   CNavItem,
//   CNavLink,
//   CDropdown,
//   CDropdownToggle,
//   CDropdownMenu,
//   CDropdownItem,
//   CForm,
//   CFormInput,
//   CButton,
// } from '@coreui/react';
// import styles from "./NavBar.module.css"; // Import CSS module

// function NavBar(){
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <CNavbar expand="lg" colorScheme="light" className="bg-light">
//         <CContainer fluid>
//           <CNavbarBrand href="#">QUENTON <br/> HUA</CNavbarBrand>
//           <CNavbarToggler
//             aria-label="Toggle navigation"
//             aria-expanded={visible}
//             onClick={() => setVisible(!visible)}
//           />
//           <CCollapse className={`navbar-collapse ${styles["nav-items"]}`} visible={visible}>
//             <CNavbarNav className={`me-auto mb-2 mb-lg-0`}>
//               <CNavItem>
//                 <CNavLink href="#" active>
//                   Home
//                 </CNavLink>
//               </CNavItem>
//               <CNavItem>
//                 <CNavLink href="#projects">Project</CNavLink>
//               </CNavItem>
//               <CNavItem>
//                 <CNavLink href="#" disabled>
//                   Disabled
//                 </CNavLink>
//               </CNavItem>
//             </CNavbarNav>
//             <CForm className="d-flex">
//               <CFormInput type="search" className="me-2" placeholder="Search" />
//               <CButton type="submit" color="success" variant="outline">
//                 Search
//               </CButton>
//             </CForm>
//           </CCollapse>
//         </CContainer>
//       </CNavbar>
//     </>
//   )
// }

// export default NavBar;
