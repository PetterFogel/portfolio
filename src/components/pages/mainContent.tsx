import { FC } from "react";
import About from "../main/about";
import Contact from "../main/contact";
import Intro from "../main/intro";
import Projects from "../main/projects/projects";
import Skills from "../main/skills";
import classes from "../../styles/navigation.module.css";
import { Internship } from "../main/internship";

export const MainContent: FC = () => {
  return (
    <main className={classes.main}>
      <Intro />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Contact />
    </main>
  );
};
