
// import Hero from './Sections/Hero';
// import About from './Sections/About';
// import Skills from './Sections/Skills';
// import Experience from './Sections/Experience';
// import Projects from './Sections/Projects';
// import Certifications from './Sections/Certifications';
// import UIUX from './Sections/UIUX';
import Contact from './Sections/Contact';
// import Extracurricular from './Sections/Extracurricular';

import Navbar from "./Navbar/Navbar";
import About from "./Sections/About";
import Certificates from "./Sections/Certificates";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import UIUX from "./Sections/UIUX";
import WorkExperience from "./Sections/WorkExperience";
import ExtraActivities from './Sections/ExtraActivities';

export default function Home() {
  return (
    <div>
      <Navbar />
       <Hero />
    
      <About />
       
      <Skills />
      
      <WorkExperience/>
       
      <Projects />
     
      <Certificates />
      
      <UIUX />
      <Contact/>
      <ExtraActivities/>
       {/*
      <Contact />
      <Extracurricular /> */}
    </div>
  );
}