import { FC } from "react";
import About from "../main/about";
import Contact from "../main/contact";
import Intro from "../main/intro";
import Projects from "../main/projects/projects";
import Skills from "../main/skills";

const MainContent: FC = () => {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default MainContent;
