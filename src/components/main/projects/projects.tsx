import { FC } from "react";
import classes from "../../../styles/global.module.css";
import ProjectItem from "./projectItem";
import { ProjectListData } from "../../../data/projectListData";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects: FC = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  if (inView) {
    animation.start({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
      },
    });
  }

  return (
    <section ref={ref} className={classes.section} id="projects">
      <motion.div animate={animation} initial={{ opacity: 0, x: 100 }}>
        <h2 className={classes.sectionTitle}>What I've done</h2>
      </motion.div>
      <motion.div animate={animation} initial={{ opacity: 0, y: 100 }}>
        <div>
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
      </motion.div>
    </section>
  );
};

export default Projects;
