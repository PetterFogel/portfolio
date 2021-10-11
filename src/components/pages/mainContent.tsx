import { FC } from "react";
import classes from "../../styles/mainContent.module.css";
import About from "../main/about";
import Contact from "../main/contact";
import Intro from "../main/intro";
import Projects from "../main/Projects";
import Skills from "../main/skills";

const MainContent: FC = () => {
  return (
    <main className={classes.main}>
      <Intro />
      <About />
      <Skills />
      <Projects />  
      <Contact />
    </main>
  );
}

export default MainContent;
