import classes from "../../styles/global.module.css";

const Projects = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>What I've done</h2>
      <div className={classes.flexRow}>
        <p className={classes.paragraph}>All my projects can be viewed at my&nbsp;</p>
        <a
          className={classes.a}
          href="https://github.com/PetterFogel"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.
        </a>
      </div>
      <div className={classes.imageContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Projects;
