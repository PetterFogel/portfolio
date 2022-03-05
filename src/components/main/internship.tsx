import { FC } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "../../styles/global.module.css";

export const Internship: FC = () => {
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
    <section ref={ref} className={classes.section} id="about">
      <motion.div animate={animation} initial={{ opacity: 0, x: 100 }}>
        <h2 className={classes.sectionTitle}>Internship</h2>
      </motion.div>
      <motion.div animate={animation} initial={{ opacity: 0, y: 100 }}>
        <div>
          <p className={classes.paragraph}>
            I had internship at Denthub AB, who has a platform for collaboration
            between dentist and technicians. I helped the software team to
            migrate their front end application to a newer one.
          </p>
          <p className={classes.paragraph}>
            At FrontEdge IT I had my second internship. The Assignment was to
            create an application for the company, Jackon. I am part of the
            software team to create a application from the ground up.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
