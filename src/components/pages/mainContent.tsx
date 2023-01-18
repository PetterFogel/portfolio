import { FC } from "react";
import { Contact } from "../main/Contact";
import { Skills } from "../main/Skills";
import { Projects } from "../main/projects/Projects";
import { Internship } from "../main/Internship";
import { About } from "../main/About";
import { Intro } from "../main/Intro";
import classes from "../../styles/navigation.module.css";

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
