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


    console.log(selectedTheme);
  return (
    <div className="App">
      <NavBar
        id="navbar"
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
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
