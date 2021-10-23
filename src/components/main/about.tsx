import { FC } from "react";
import classes from "../../styles/global.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: FC = () => {
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
      <motion.div animate={animation} initial={{ opacity: 0, x: 100 }}>
        <h2 className={classes.sectionTitle}>Who am I</h2>
      </motion.div>
      <motion.div animate={animation} initial={{ opacity: 0, y: 100 }}>
        <div>
          <p className={classes.paragraph}>
            I’m a 25 year old based in Gothenburg Sweden. In september 2020, I
            started my education at Medieinstitutet to pursuit a career as a
            frontend developer.
          </p>
          <p className={classes.paragraph}>
            I’v always been creative but I never really knew how to to use these
            skills. That was until I found my new passion of web development.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
