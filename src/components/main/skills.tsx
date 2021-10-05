import classes from "../../styles/global.module.css";

function Skills() {
  const skillList: string[] = [
    "HTML5",
    "CSS3",
    "Javascript",
    "TypeScript",
    "React",
    "Node",
  ];

  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>What I do</h2>
      <p className={classes.paragraph}>
        These are my skills, willing to learn more.{" "}
      </p>
      <div className={classes.skillsHolder}>
        {skillList.map((skill, index) => (
          <div key={index} className={classes.skillItemHolder}>
            <p>
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
