import { FC } from "react";
import classes from "../../styles/global.module.css";
import { skillList } from "../../data/skillsListData";

const Skills: FC = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>What I do</h2>
      <div>
        <p className={classes.paragraph}>
          These are my skills, willing to learn more.{" "}
        </p>
        <div className={classes.skillsHolder}>
          {skillList.map((skill, index) => (
            <div key={index} className={classes.skillItemHolder}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
