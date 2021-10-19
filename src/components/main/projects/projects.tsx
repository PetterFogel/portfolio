import { FC } from "react";
import classes from "../../../styles/global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectItem from "./projectItem";
import { ProjectListData } from "../../data/projectListData";

const Projects: FC = () => {
  AOS.init({
    offset: 100,
    duration: 2000,
    easing: "ease",
    once: true,
  });

  return (
    <section className={classes.section}>
      <h2 data-aos="fade-left" className={classes.sectionTitle}>
        What I've done
      </h2>
      <div data-aos="fade-up">
        <div className={classes.flexRow}>
          <p className={classes.paragraph}>
            All my projects can be viewed at my&nbsp;
          </p>
          <a
            className={classes.aLink}
            href="https://github.com/PetterFogel"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.
          </a>
        </div>
        <div className={classes.imageContainer}>
          {ProjectListData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
