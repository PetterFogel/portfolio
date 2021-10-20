import React, { FC } from "react";
import classes from "../../../styles/global.module.css";
import { Project } from "../../../models/project";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: FC<ProjectItemProps> = ({ project }: ProjectItemProps) => {
  return (
    <div className={classes.imageHolder}>
      <img className={classes.image} src={project.img} alt="movie-box" />
      <div className={classes.overlay}>
        <p>{project.info}</p>
        <div className={classes.btnHolder}>
          <a
            href={project.netlifyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btn}>Netlify</button>
          </a>

          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <button className={classes.btn}>Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
