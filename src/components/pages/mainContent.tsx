import classes from "../../styles/mainContent.module.css";
import About from "../main/about";
import Intro from "../main/intro";
import Projects from "../main/Projects";
import Skills from "../main/skills";

function MainContent() {
  return (
    <main className={classes.main}>
      <Intro />
      <About />
      <Skills />
      <Projects />  
    </main>
  );
}

export default MainContent;
