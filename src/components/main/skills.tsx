import { FC } from "react";
import classes from "../../styles/global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillList } from "../data/skillsListData";

const Skills: FC = () => {
  AOS.init({
    offset: 100,
    duration: 2000,
    easing: "ease",
    once: true,
  });

  return (
    <section className={classes.section}>
      <h2 data-aos="fade-left" className={classes.sectionTitle}>
        What I do
      </h2>
      <div data-aos="fade-up">
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
