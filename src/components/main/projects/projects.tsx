import { FC } from "react";
import { ProjectListData } from "../../../data/projectListData";
import { ProjectItem } from "./ProjectItem";
import classes from "../../../styles/global.module.css";

export const Projects: FC = () => {
  return (
    <section className={classes.section} id="projects">
      <h2 className={classes.sectionTitle}>What I've done</h2>

      <div>
        <div className={classes.flexRow}>
          <p className={classes.paragraph}>
            Some of my recent work. All my projects can be viewed at my&nbsp;
            <a
              className={classes.githubLink}
              href="https://github.com/PetterFogel"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.
            </a>
          </p>
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
