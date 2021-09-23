import classes from "../../styles/global.module.css";

function Skills() {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>What I do</h2>
      <br />
      <br />
      <p className={classes.paragraph}>
        These are my skills, willing to learn more.{" "}
      </p>
      <br />
      <br />
      <div className={classes.skillsHolder}>
        <div>
          <p className={classes.paragraph}>HTML5</p>
          <p className={classes.paragraph}>CSS3</p>
          <p className={classes.paragraph}>JavaScript</p>
        </div>
        <div>
          <p className={classes.paragraph}>TypeScript</p>
          <p className={classes.paragraph}>React</p>
          <p className={classes.paragraph}>Node.js</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
