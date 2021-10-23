import { FC } from "react";
import classes from "../../styles/global.module.css";
import { skillList } from "../../data/skillsListData";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills: FC = () => {
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
    <section ref={ref} className={classes.section}>
      <motion.div animate={animation} initial={{ opacity: 0, x: -100 }}>
        <h2 className={classes.sectionTitle}>What I do</h2>
      </motion.div>
      <motion.div animate={animation} initial={{ opacity: 0, y: 100 }}>
        <div>
          <p className={classes.paragraph}>
            These are my skills, willing to learn more.
          </p>
          <div className={classes.skillsHolder}>
            {skillList.map((skill, index) => (
              <div key={index} className={classes.skillItemHolder}>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
