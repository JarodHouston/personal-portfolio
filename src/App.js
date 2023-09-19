import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import AboutMe from "./components/aboutMe.js";
import Experience from "./components/experience.js";
import MyProjects from "./components/myProjects.js";
import Project from "./components/project.js";
import Footer from "./components/footer.js";
import ProjectData from "./project-data.js";
import ExperienceData from "./experience-data.js";
import MyExperiences from "./components/myExperiences";

function App() {
  const projects = ProjectData.map((item) => {
    return <Project />;
  });

  // const mainRef = useRef(null);
  // const aboutRef = useRef(null);
  // const experienceRef = useRef(null);
  // const projectsRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
      <header className="App-header">
        <Header />
        <AboutMe />
        <MyExperiences experience={ExperienceData} />
        <MyProjects project={ProjectData} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
