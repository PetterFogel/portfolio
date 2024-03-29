import classes from "../../styles/global.module.css";
import { animated, useSpring } from "react-spring";
import { FC } from "react";

export const Intro: FC = () => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
      marginTop: 300,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
    config: {
      duration: 1200,
    },
  });

  return (
    <section className={classes.introSection} id="intro">
      <animated.div style={fadeIn}>
        <h2 className={classes.subHeadTitle}>Hello, World!</h2>
        <h1 className={classes.headTitle}>My name is Petter Fogel.</h1>
        <h2 className={classes.subHeadTitle}>
          I am a software developer with passion for creative solutions and
          design.
        </h2>
      </animated.div>
    </section>
  );
};
