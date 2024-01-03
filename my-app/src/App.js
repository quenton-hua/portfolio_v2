import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import HeroPage from "./components/HeroPage.js";
import ProjectsPage from "./components/ProjectsPage.js";
import ExperiencePage from "./components/ExperiencePage.js";
import ContactPage from "./components/ContactPage.js";
import contactData from "./utils/contact.json";


//TODO TEMP FIX
// import 'bootstrap/dist/css/bootstrap.min.css';

// import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [navIconClicked, setNavIconClicked] = useState(false);
  

  useEffect(() => {
    try {
      if (localStorage.getItem("selectedTheme") === null) {
        localStorage.setItem("selectedTheme", "light");
      }
      setSelectedTheme(localStorage.getItem("selectedTheme"));
    } catch (e) {
      console.log("no local storage");
    }
  }, []);

    document.querySelector("body").setAttribute("data-theme", selectedTheme);


    useEffect(() => {
      // Add/remove the "active" class based on navIconClicked
      const pageContentDiv = document.querySelector(".page-content");
      if (pageContentDiv) {
        if (navIconClicked) {
          pageContentDiv.classList.add("active");
        } else {
          pageContentDiv.classList.remove("active");
        }
      }
    }, [navIconClicked]);

  return (
    <div className="App">
      <NavBar
        id="navbar"
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        navIconClicked={navIconClicked}
        setNavIconClicked={setNavIconClicked}
      />
      <div className="page-content">
        <HeroPage id="home" contactData={contactData} />
        <div>
          <ProjectsPage id="projects" />
          <ExperiencePage id="experience" selectedTheme={selectedTheme} />
          <ContactPage id="contact" contactData={contactData} />
        </div>
      </div>
    </div>
  );
}

export default App;
